import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Page } from "../../../common/Page/Page";
import { MusicCurationsPageState, MusicItem, MusicView } from "./common/models";
import { CurationInfoButton } from "./components/CurationInfoButton";
import { DataViewSelect } from "./components/DataViewSelect";
import { SearchQueryInput } from "./components/SearchQueryInput";
import { SortOrderSelect } from "./components/SortOrderSelect";
import { useMusicItemsList } from "./hooks/useMusicItemsList";
import { musicItemDataset } from "./musicItemDataset";
import { musicViews } from "./musicViews";
import styles from "./MusicCurationsPage.module.scss";

export const getServerSideProps: GetServerSideProps<
  MusicCurationsPageProps,
  {
    dataView: string;
    searchQuery: string;
    sortOrder: string;
    pageIndex: string;
  }
> = async (pageServerContext) => {
  const pageMusicViews = [
    {
      viewName: "all",
      viewFilter: "*",
    },
    ...musicViews,
  ];
  return {
    props: {
      musicViews: pageMusicViews,
      musicItems: musicItemDataset.map((someMusicItem) => ({
        ...someMusicItem,
        musicYear: parseInt(someMusicItem.musicYear),
      })),
      musicCurator: {
        curatorName: "clumsycomputer",
        curatorLocation: "guadalajara, jalisco",
        curatorStatus: "just trying to listen and groove",
        curatorLinks: [
          {
            linkType: "website",
            linkHref: "https://clumsycomputer.com",
          },
          {
            linkType: "github",
            linkHref: "https://github.com/clumsycomputer",
          },
          {
            linkType: "twitter",
            linkHref: "https://twitter.com/c1umsyc0mputer",
          },
        ],
      },
      initialPageState: {
        dataView:
          typeof pageServerContext.query?.dataView === "string" &&
          pageMusicViews.findIndex(
            (someMusicView) =>
              someMusicView ===
              (pageServerContext.query?.dataView as unknown as MusicView)
          ) >= 0
            ? pageServerContext.query?.dataView
            : "all",
        searchQuery:
          typeof pageServerContext.query?.searchQuery === "string"
            ? pageServerContext.query?.searchQuery
            : "",
        sortOrder:
          typeof pageServerContext.query?.sortOrder === "string"
            ? (pageServerContext.query
                ?.sortOrder as MusicCurationsPageState["sortOrder"])
            : "titleAscending",
        pageIndex:
          typeof pageServerContext.query?.pageIndex === "string"
            ? parseInt(pageServerContext.query?.pageIndex)
            : 1,
      },
    },
  };
};

export interface MusicCurationsPageProps {
  musicItems: Array<MusicItem<number>>;
  musicViews: Array<MusicView>;
  musicCurator: {
    curatorName: string;
    curatorLocation: string;
    curatorStatus: string;
    curatorLinks: Array<{
      linkType: "website" | "github" | "twitter";
      linkHref: string;
    }>;
  };
  initialPageState: MusicCurationsPageState;
}

export const MusicCurationsPage: NextPage<MusicCurationsPageProps> = (
  props: MusicCurationsPageProps
) => {
  const { musicViews, musicItems, musicCurator, initialPageState } = props;
  const pageRouter = useRouter();
  const [pageState, setPageState] =
    useState<MusicCurationsPageState>(initialPageState);
  useEffect(() => {
    if (
      pageRouter.query["dataView"] !== pageState.dataView ||
      pageRouter.query["searchQuery"] !== pageState.searchQuery ||
      pageRouter.query["sortOrder"] !== pageState.sortOrder ||
      pageRouter.query["pageIndex"] !== `${pageState.pageIndex}`
    ) {
      const nextPageUrl = new URL(
        `${window.location.origin}${window.location.pathname}`
      );
      nextPageUrl.searchParams.append("dataView", pageState.dataView);
      nextPageUrl.searchParams.append("searchQuery", pageState.searchQuery);
      nextPageUrl.searchParams.append("sortOrder", pageState.sortOrder);
      nextPageUrl.searchParams.append("pageIndex", `${pageState.pageIndex}`);
      pageRouter.replace(nextPageUrl, undefined, {
        shallow: true,
      });
    }
  }, [pageRouter, pageState]);
  const { musicListItems, musicItemsListNavigation } = useMusicItemsList({
    musicViews,
    musicItems,
    pageState,
    setPageState,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [musicListItems]);
  return (
    <Page
      pageContentContainerClassname={styles.pageContentContainer}
      accessibilityLabel={`musical curations by ${musicCurator.curatorName}`}
      pageTabTitle={`${musicCurator.curatorName}/music`}
      pageDescription={`a catalog of awesome music curated by ${musicCurator.curatorName}`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.viewSelectContainer}>
          <DataViewSelect
            options={musicViews}
            value={pageState.dataView}
            onChange={(nextDataView) => {
              setPageState({
                ...pageState,
                dataView: nextDataView,
                pageIndex: 1,
              });
            }}
          />
        </div>
        <div className={styles.infoButtonContainer}>
          <CurationInfoButton musicCurator={musicCurator} />
        </div>
      </div>
      <div className={styles.itemsFilterContainer}>
        <div className={styles.sortOrderSelectContainer}>
          <SortOrderSelect
            value={pageState.sortOrder}
            onChange={(nextSortOrder) => {
              setPageState({
                ...pageState,
                sortOrder: nextSortOrder,
                pageIndex: 1,
              });
            }}
          />
        </div>
        <SearchQueryInput
          value={pageState.searchQuery}
          onChange={(someChangeEvent) => {
            setPageState({
              ...pageState,
              searchQuery: someChangeEvent.currentTarget.value,
              pageIndex: 1,
            });
          }}
          clearSearchQuery={() => {
            setPageState({
              ...pageState,
              searchQuery: "",
              pageIndex: 1,
            });
          }}
        />
      </div>
      <div className={styles.musicItemsList} role={"list"}>
        {musicListItems}
      </div>
      {musicItemsListNavigation}
      <div className={styles.pageFooterPadding} />
    </Page>
  );
};
