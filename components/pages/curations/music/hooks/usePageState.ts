import { NextRouter } from "next/router";
import { useMemo } from "react";
import { MusicCurationsPageState } from "../common/models";
import { MusicCurationsPageProps } from "../MusicCurationsPage";

export interface UsePageStateApi
  extends Pick<MusicCurationsPageProps, "musicViews"> {
  pageRouter: NextRouter;
}

export function usePageState(api: UsePageStateApi) {
  const { pageRouter, musicViews } = api;
  const pageRoute = pageRouter.route;
  const routerQueryPageIndex = pageRouter.query["pageIndex"];
  const routerQuerySearchQuery = pageRouter.query["searchQuery"];
  const routerQuerySortOrder = pageRouter.query["sortOrder"];
  const routerQueryDataView = pageRouter.query["dataView"];
  return useMemo<MusicCurationsPageState>(() => {
    return {
      pageRoute,
      pageIndex:
        parseInt(
          typeof routerQueryPageIndex === "string"
            ? routerQueryPageIndex
            : "wtf?"
        ) || 1,
      searchQuery:
        typeof routerQuerySearchQuery === "string"
          ? routerQuerySearchQuery
          : "",
      sortOrder:
        typeof routerQuerySortOrder === "string" &&
        [
          "titleAscending",
          "titleDescending",
          "artistAscending",
          "artistDescending",
          "yearAscending",
          "yearDescending",
        ].reduce((sortOrderValid, someValidSortOrder) => {
          return sortOrderValid
            ? sortOrderValid
            : someValidSortOrder === routerQuerySortOrder;
        }, false)
          ? (routerQuerySortOrder as MusicCurationsPageState["sortOrder"])
          : "titleAscending",
      dataView:
        typeof routerQueryDataView === "string" &&
        musicViews.findIndex(
          (someMusicView) => someMusicView.viewName === routerQueryDataView
        ) >= 0
          ? (routerQueryDataView as MusicCurationsPageState["dataView"])
          : "all",
    };
  }, [
    pageRoute,
    routerQueryPageIndex,
    routerQuerySearchQuery,
    routerQuerySortOrder,
    routerQueryDataView,
  ]);
}
