import { NextRouter } from "next/router";
import { useMemo } from "react";
import { MusicCurationsPageState } from "../common/models";

export interface UsePageStateApi {
  pageRouter: NextRouter;
}

export function usePageState(api: UsePageStateApi) {
  const { pageRouter } = api;
  const pageRoute = pageRouter.route;
  const routerQueryPageIndex = pageRouter.query["pageIndex"];
  const routerQuerySearchQuery = pageRouter.query["searchQuery"];
  const routerQuerySortOrder = pageRouter.query["sortOrder"];
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
        typeof routerQuerySortOrder === "string" &&
        ["all"].reduce((sortOrderValid, someValidSortOrder) => {
          return sortOrderValid
            ? sortOrderValid
            : someValidSortOrder === routerQuerySortOrder;
        }, false)
          ? (routerQuerySortOrder as MusicCurationsPageState["dataView"])
          : "all",
    };
  }, [
    pageRoute,
    routerQueryPageIndex,
    routerQuerySearchQuery,
    routerQuerySortOrder,
  ]);
}
