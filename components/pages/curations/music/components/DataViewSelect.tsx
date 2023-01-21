import {
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import ClickAwayListener from "react-click-away-listener";
import { usePopper } from "react-popper";
import { MusicCurationsPageState } from "../common/models";
import { MusicCurationsPageProps } from "../MusicCurationsPage";
import styles from "./DataViewSelect.module.scss";

export interface DataViewSelectProps {
  options: MusicCurationsPageProps["musicViews"];
  value: MusicCurationsPageState["dataView"];
  onChange: (nextSortOrder: MusicCurationsPageState["dataView"]) => void;
}

export function DataViewSelect(props: DataViewSelectProps) {
  const { options, value, onChange } = props;
  const [selectButtonElement, setSelectButtonElement] =
    useState<HTMLDivElement | null>(null);
  const [selectMenu, setSelectMenu] = useState<ReactNode>(null);
  return (
    <Fragment>
      <div
        tabIndex={0}
        className={styles.selectButton}
        ref={setSelectButtonElement}
        onClick={() => {
          setSelectMenu(
            <DataViewSelectMenu
              options={options}
              value={value}
              onChange={onChange}
              selectButtonElement={selectButtonElement}
              setSelectMenu={setSelectMenu}
            />
          );
        }}
      >
        <div className={styles.buttonLabel}>
          {getDataViewLabel({
            someDataView: value,
          })}
        </div>
        <div className={styles.iconContainer}>
          <svg className={styles.buttonArrow} viewBox={"0 0 1 1"}>
            <polygon
              points={"0.2,0.375 0.8,0.375 0.5,0.775"}
              stroke={"black"}
              strokeWidth={0.085}
              strokeLinejoin={"round"}
              fill={"white"}
            />
          </svg>
        </div>
      </div>
      {selectMenu}
    </Fragment>
  );
}

interface DataViewSelectMenuProps
  extends Pick<DataViewSelectProps, "options" | "value" | "onChange"> {
  selectButtonElement: HTMLDivElement | null;
  setSelectMenu: Dispatch<SetStateAction<ReactNode>>;
}

function DataViewSelectMenu(props: DataViewSelectMenuProps) {
  const { selectButtonElement, options, setSelectMenu, value, onChange } =
    props;
  const [selectMenuElement, setSelectMenuElement] =
    useState<HTMLDivElement | null>(null);
  const selectMenuPopper = usePopper(selectButtonElement, selectMenuElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, -29],
        },
      },
    ],
  });
  const dataViewList = useMemo<Array<string>>(
    () => options.map((someOption) => someOption.viewName),
    []
  );
  return (
    <ClickAwayListener
      onClickAway={() => {
        setSelectMenu(null);
      }}
    >
      <div
        className={styles.selectMenuContainer}
        {...selectMenuPopper.attributes.popper}
        style={{ ...selectMenuPopper.styles.popper }}
        ref={setSelectMenuElement}
      >
        {dataViewList.map((someDataView) => (
          <div
            key={someDataView}
            className={`${styles.selectMenuItem} ${
              someDataView === value ? styles.itemSelected : ""
            }`}
            onClick={() => {
              const nextDataView = someDataView;
              onChange(nextDataView);
              setTimeout(() => {
                setSelectMenu(null);
              });
            }}
          >
            <div className={styles.itemCheck}>✓</div>
            <div className={styles.itemText}>
              {getDataViewLabel({
                someDataView,
              })}
            </div>
          </div>
        ))}
      </div>
    </ClickAwayListener>
  );
}

interface GetDataViewLabelApi {
  someDataView: MusicCurationsPageState["dataView"];
}

function getDataViewLabel(api: GetDataViewLabelApi) {
  const { someDataView } = api;
  return someDataView;
}
