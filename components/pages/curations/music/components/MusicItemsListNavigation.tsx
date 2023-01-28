import Link from "next/link";
import { ReactNode } from "react";
import { MusicCurationsPageState } from "../common/models";
import styles from "./MusicItemsListNavigation.module.scss";

export interface MusicItemsListNavigationProps
  extends Pick<MusicCurationsPageState, "pageIndex"> {
  pageCount: number;
  previousPageLink: ReactNode;
  nextPageLink: ReactNode;
}

export function MusicItemsListNavigation(props: MusicItemsListNavigationProps) {
  const { previousPageLink, pageIndex, pageCount, nextPageLink } = props;

  return (
    <div
      className={styles.navigationContainer}
      role={"navigation"}
      aria-label={"music items list page navigation"}
    >
      {previousPageLink}
      <div className={styles.currentIndexContainer}>
        <label
          className={styles.currentIndexLabel}
          id={"musicItemsListPageLabel"}
        >
          music items list page:
        </label>
        <div
          className={styles.navigationText}
          role={"meter"}
          aria-valuemin={1}
          aria-valuemax={pageCount}
          aria-valuenow={pageIndex}
          aria-labelledby={"musicItemsListPageLabel"}
        >
          {`${pageIndex} / ${pageCount}`}
        </div>
      </div>
      {nextPageLink}
    </div>
  );
}

export interface ActiveMusicItemsListPageLinkProps
  extends MusicItemsListPageLinkPropsBase,
    Required<Pick<JSX.IntrinsicElements["button"], "onClick">> {}

export function ActiveMusicItemsListPageLink(
  props: ActiveMusicItemsListPageLinkProps
) {
  const { linkLabel, onClick } = props;
  return (
    <button
      className={styles.activeNavigationLink}
      tabIndex={0}
      onClick={onClick}
    >
      {linkLabel}
    </button>
  );
}

export interface DisabledMusicItemsListPageLinkProps
  extends MusicItemsListPageLinkPropsBase {}

export function DisabledMusicItemsListPageLink(
  props: DisabledMusicItemsListPageLinkProps
) {
  const { linkLabel } = props;
  return <div className={styles.disabledNavigationLink}>{linkLabel}</div>;
}

interface MusicItemsListPageLinkPropsBase {
  linkLabel: string;
}
