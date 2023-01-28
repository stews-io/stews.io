import * as Liqe from "liqe";
import { Dispatch, SetStateAction, useMemo } from "react";
import { MusicCurationsPageState } from "../common/models";
import {
  ActiveMusicItemsListPageLink,
  DisabledMusicItemsListPageLink,
  MusicItemsListNavigation,
} from "../components/MusicItemsListNavigation";
import { EmptyListItem, MusicListItem } from "../components/MusicListItem";
import { MusicCurationsPageProps } from "../MusicCurationsPage";

export interface UseMusicItemsListApi
  extends Pick<MusicCurationsPageProps, "musicItems" | "musicViews"> {
  pageState: MusicCurationsPageState;
  setPageState: Dispatch<SetStateAction<MusicCurationsPageState>>;
}

export function useMusicItemsList(api: UseMusicItemsListApi) {
  const { musicViews, pageState, musicItems, setPageState } = api;
  return useMemo(() => {
    const selectedMusicView = musicViews.find(
      (someMusicView) => someMusicView.viewName === pageState.dataView
    )!;
    const filteredMusicItems = Liqe.filter(
      Liqe.parse(selectedMusicView.viewFilter),
      musicItems
    )
      .filter((someMusicItem) =>
        `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
          ","
        )},${someMusicItem.musicStyles.join(",")},${
          someMusicItem.musicYear
        },${`${someMusicItem.recordingContext.join("/")} ${
          someMusicItem.sourceType === "collection"
            ? someMusicItem.collectionType
            : someMusicItem.sourceType
        }${someMusicItem.musicType === "clip" ? " clip" : ""}`}`
          .toLowerCase()
          .includes(pageState.searchQuery.toLowerCase())
      )
      .sort((itemA, itemB) => {
        switch (pageState.sortOrder) {
          case "titleAscending":
            return itemA.musicTitle.localeCompare(itemB.musicTitle);
          case "titleDescending":
            return itemB.musicTitle.localeCompare(itemA.musicTitle);
          case "artistAscending":
            return itemA.musicArtist[0].localeCompare(itemB.musicArtist[0]);
          case "artistDescending":
            return itemB.musicArtist[0].localeCompare(itemA.musicArtist[0]);
          case "yearAscending":
            return itemA.musicYear - itemB.musicYear;
          case "yearDescending":
            return itemB.musicYear - itemA.musicYear;
        }
      });
    const pageSize = 7;
    const pageCount = Math.ceil(filteredMusicItems.length / pageSize) || 1;
    // const _pageIndex =
    //   pageState.pageIndex > 0 && pageState.pageIndex <= pageCount
    //     ? pageState.pageIndex
    //     : 1;
    const pageIndexStart = pageSize * (pageState.pageIndex - 1);
    const musicItemsListPage = filteredMusicItems.slice(
      pageIndexStart,
      pageIndexStart + pageSize
    );
    return {
      musicListItems:
        musicItemsListPage.length > 0 ? (
          musicItemsListPage.map((someMusicItem) => (
            <MusicListItem
              key={someMusicItem.musicId}
              musicThumbnailHref={someMusicItem.musicThumbnailHref}
              musicTitle={someMusicItem.musicTitle}
              musicArtist={someMusicItem.musicArtist}
              musicStyles={someMusicItem.musicStyles}
              externalLinks={someMusicItem.externalLinks}
              musicContext={`${
                someMusicItem.musicYear
              } ${someMusicItem.recordingContext.join("/")} ${
                someMusicItem.sourceType === "collection"
                  ? someMusicItem.collectionType
                  : someMusicItem.sourceType
              }${someMusicItem.musicType === "clip" ? " (clip)" : ""}`}
            />
          ))
        ) : (
          <EmptyListItem />
        ),
      musicItemsListNavigation: (
        <MusicItemsListNavigation
          pageIndex={pageState.pageIndex}
          pageCount={pageCount}
          previousPageLink={
            pageState.pageIndex > 1 ? (
              <ActiveMusicItemsListPageLink
                linkLabel={"prev"}
                onClick={() => {
                  setPageState({
                    ...pageState,
                    pageIndex: pageState.pageIndex - 1,
                  });
                }}
              />
            ) : (
              <DisabledMusicItemsListPageLink linkLabel={"prev"} />
            )
          }
          nextPageLink={
            pageState.pageIndex < pageCount ? (
              <ActiveMusicItemsListPageLink
                linkLabel={"next"}
                onClick={() => {
                  setPageState({
                    ...pageState,
                    pageIndex: pageState.pageIndex + 1,
                  });
                }}
              />
            ) : (
              <DisabledMusicItemsListPageLink linkLabel={"next"} />
            )
          }
        />
      ),
    };
  }, [pageState, musicItems]);
}
