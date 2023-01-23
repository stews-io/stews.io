import Link from "next/link";
import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { usePopper } from "react-popper";
import styles from "./CurationInfoButton.module.scss";

export interface CurationInfoButtonProps {}

export function CurationInfoButton(props: CurationInfoButtonProps) {
  const {} = props;
  const [infoButtonElement, setInfoButtonElement] =
    useState<HTMLDivElement | null>(null);
  const [infoDisplay, setInfoDisplay] = useState<ReactNode>(null);
  return (
    <Fragment>
      <div
        tabIndex={0}
        className={styles.infoButton}
        ref={setInfoButtonElement}
        onClick={() => {
          setInfoDisplay(
            <CurationInfoDisplay
              infoButtonElement={infoButtonElement}
              setInfoDisplay={setInfoDisplay}
            />
          );
        }}
      >
        <svg viewBox="0 0 100 100" width={32} height={32}>
          <circle
            cx={50}
            cy={50}
            r={40}
            stroke={"black"}
            strokeWidth={6}
            fill={"transparent"}
          />
          <defs>
            <path id={"textBaselinePath"} d={"M32.5,69 L67.5,69"} />
          </defs>
          <text>
            <textPath
              href={"#textBaselinePath"}
              style={{
                fontSize: 60,
                fontWeight: "bold",
              }}
            >
              i
            </textPath>
          </text>
        </svg>
      </div>
      {infoDisplay}
    </Fragment>
  );
}

interface CurationInfoDisplayProps {
  infoButtonElement: HTMLDivElement | null;
  setInfoDisplay: Dispatch<SetStateAction<ReactNode>>;
}

function CurationInfoDisplay(props: CurationInfoDisplayProps) {
  const { infoButtonElement, setInfoDisplay } = props;
  const [infoDisplayElement, setInfoDisplayElement] =
    useState<HTMLDivElement | null>(null);
  const infoDisplayPopper = usePopper(infoButtonElement, infoDisplayElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [3, -30],
        },
      },
    ],
  });
  return (
    <ClickAwayListener
      onClickAway={() => {
        setInfoDisplay(null);
      }}
    >
      <div
        className={styles.infoDisplayContainer}
        {...infoDisplayPopper.attributes.popper}
        style={{ ...infoDisplayPopper.styles.popper }}
        ref={setInfoDisplayElement}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              music
            </div>
            <div
              style={{
                flexShrink: 0,
                height: 22,
                width: 22,
                cursor: "pointer",
              }}
              onClick={() => {
                setInfoDisplay(null);
              }}
            >
              <svg className={styles.clearSearchIcon} viewBox={"0 0 1 1"}>
                <circle
                  cx={0.5}
                  cy={0.5}
                  r={0.35}
                  stroke={"black"}
                  strokeWidth={0.07}
                  strokeLinejoin={"round"}
                  strokeLinecap={"round"}
                  fill={"white"}
                />
                <polygon
                  points={
                    "0.5,0.5 0.625,0.375, 0.5,0.5 0.625,0.625 0.5,0.5, 0.375,0.625 0.5,0.5, 0.375,0.375 0.5,0.5"
                  }
                  stroke={"black"}
                  strokeWidth={0.07}
                  strokeLinejoin={"round"}
                  fill={"white"}
                />
              </svg>
            </div>
          </div>
          <div
            style={
              {
                // paddingTop: 1,
              }
            }
          >
            <Link legacyBehavior href={"./"}>
              <a
                style={{
                  // fontStyle: "italic",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                clumsycomputer
              </a>
            </Link>
          </div>
        </div>
        <div
          style={{
            paddingBlock: 8,
            fontStyle: "italic",
            fontSize: 14,
          }}
        >
          some of my favorite music
        </div>
      </div>
    </ClickAwayListener>
  );
}
