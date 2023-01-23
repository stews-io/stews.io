import { Fragment } from "react";
import styles from "./CurationInfoButton.module.scss";

export interface CurationInfoButtonProps {}

export function CurationInfoButton(props: CurationInfoButtonProps) {
  const {} = props;
  return (
    <Fragment>
      <div tabIndex={0} className={styles.infoButton}>
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
    </Fragment>
  );
}
