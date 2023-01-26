import { GetStaticPropsResult, NextPage } from "next";
import { useRouter } from "next/router";
import { Page } from "../../../common/Page/Page";
import { getUpdatedPageRoute } from "./common/getUpdatedPageRoute";
import { MusicItem, MusicView } from "./common/models";
import { SearchQueryInput } from "./components/SearchQueryInput";
import { SortOrderSelect } from "./components/SortOrderSelect";
import { DataViewSelect } from "./components/DataViewSelect";
import { useMusicItemsList } from "./hooks/useMusicItemsList";
import { usePageState } from "./hooks/usePageState";
import styles from "./MusicCurationsPage.module.scss";
import { musicItemDataset } from "./musicItemDataset";
import { musicViews } from "./musicViews";
import { CurationInfoButton } from "./components/CurationInfoButton";
import { useEffect } from "react";

export function getStaticProps(): GetStaticPropsResult<MusicCurationsPageProps> {
  return {
    props: {
      musicItems: musicItemDataset.map((someMusicItem) => ({
        ...someMusicItem,
        musicYear: parseInt(someMusicItem.musicYear),
      })),
      musicViews: [
        {
          viewName: "all",
          viewFilter: "*",
        },
        ...musicViews,
      ],
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
    },
  };
}

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
}

export const MusicCurationsPage: NextPage<MusicCurationsPageProps> = (
  props: MusicCurationsPageProps
) => {
  const { musicItems, musicViews, musicCurator } = props;
  const pageRouter = useRouter();
  const pageState = usePageState({
    musicViews,
    pageRouter,
  });
  const { musicListItems, musicItemsListNavigation } = useMusicItemsList({
    musicItems,
    musicViews,
    pageState,
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
      accessibilityLabel={"music curations"}
      pageTabTitle={"+ music - clumsycomputer"}
      pageDescription={"a catalog of awesome music"}
    >
      <div className={styles.headerContainer}>
        <div className={styles.viewSelectContainer}>
          <DataViewSelect
            options={musicViews}
            value={pageState.dataView}
            onChange={(nextDataView) => {
              pageRouter.replace(
                getUpdatedPageRoute({
                  pageState,
                  stateUpdates: {
                    dataView: nextDataView,
                    pageIndex: 1,
                  },
                }),
                undefined,
                {
                  shallow: true,
                }
              );
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
              pageRouter.replace(
                getUpdatedPageRoute({
                  pageState,
                  stateUpdates: {
                    sortOrder: nextSortOrder,
                    pageIndex: 1,
                  },
                }),
                undefined,
                {
                  shallow: true,
                }
              );
            }}
          />
        </div>
        <SearchQueryInput
          value={pageState.searchQuery}
          onChange={(someChangeEvent) => {
            pageRouter.replace(
              getUpdatedPageRoute({
                pageState,
                stateUpdates: {
                  searchQuery: someChangeEvent.currentTarget.value,
                  pageIndex: 1,
                },
              }),
              undefined,
              {
                shallow: true,
              }
            );
          }}
          clearSearchQuery={() => {
            pageRouter.replace(
              getUpdatedPageRoute({
                pageState,
                stateUpdates: {
                  searchQuery: "",
                  pageIndex: 1,
                },
              }),
              undefined,
              {
                shallow: true,
              }
            );
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
