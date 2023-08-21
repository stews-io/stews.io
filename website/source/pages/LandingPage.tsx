import cssModule from './LandingPage.module.scss'

export function LandingPage() {
  return (
    <div className={cssModule.pageContainer}>
      <div className={cssModule.pageContentContainer}>
        <div className={cssModule.pageHeader}>
          <svg
            className={cssModule.pageTitleGraphic}
            width={160}
            height={40}
            viewBox={'0 200 500 32'}
          >
            <path
              transform={'translate(0,172.44)'}
              stroke={'black'}
              stroke-linecap={'round'}
              stroke-linejoin={'round'}
              stroke-width={'1.25mm'}
              fill={'none'}
              d={
                'M 199.5 79.801 L 186.6 79.801 L 176.8 28.201 L 189.5 28.201 L 193.9 57.301 L 199.8 28.201 L 211.1 28.201 L 217.3 57.401 L 221.5 28.201 L 233.8 28.201 L 224.2 79.801 L 211.4 79.801 L 205.4 49.301 L 199.5 79.801 Z M 0 73.501 L 7.5 63.101 A 80.225 80.225 0 0 0 10.892 64.963 Q 14.434 66.792 17.15 67.651 Q 21.1 68.901 25.1 68.901 A 32.618 32.618 0 0 0 27.566 68.814 Q 30.489 68.592 32.25 67.801 A 6.054 6.054 0 0 0 33.35 67.174 Q 34.7 66.185 34.7 64.701 Q 34.7 63.101 32.95 62.201 A 12.001 12.001 0 0 0 31.483 61.575 Q 30.723 61.305 29.826 61.078 A 26.372 26.372 0 0 0 28.35 60.751 Q 25.5 60.201 22.1 59.601 Q 18.7 59.001 15.25 58.051 A 25.968 25.968 0 0 1 10.133 56.061 A 23.462 23.462 0 0 1 8.95 55.401 Q 6.1 53.701 4.35 50.951 A 10.654 10.654 0 0 1 2.985 47.62 Q 2.6 45.97 2.6 44.001 Q 2.6 38.501 5.4 34.801 Q 8.2 31.101 13.35 29.151 Q 18.5 27.201 25.3 27.201 A 44.85 44.85 0 0 1 37.209 28.848 A 49.669 49.669 0 0 1 37.4 28.901 Q 43.5 30.601 48.6 34.101 L 40.8 44.001 A 31.048 31.048 0 0 0 35.617 41.191 A 26.717 26.717 0 0 0 32.85 40.201 A 28.69 28.69 0 0 0 26.736 39.067 A 25.752 25.752 0 0 0 24.9 39.001 A 27.248 27.248 0 0 0 22.804 39.076 Q 20.703 39.239 19.325 39.753 A 6.715 6.715 0 0 0 18.85 39.951 A 5.094 5.094 0 0 0 17.929 40.491 Q 17.42 40.874 17.14 41.34 A 2.407 2.407 0 0 0 16.8 42.601 A 2.416 2.416 0 0 0 17.783 44.578 A 4.161 4.161 0 0 0 18.55 45.051 A 11.622 11.622 0 0 0 19.963 45.617 Q 21.36 46.081 23.25 46.401 Q 26.2 46.901 29.7 47.451 Q 33.2 48.001 36.65 48.951 Q 40.1 49.901 43.05 51.651 Q 46 53.401 47.75 56.201 A 10.776 10.776 0 0 1 49.049 59.345 Q 49.387 60.711 49.472 62.31 A 20.65 20.65 0 0 1 49.5 63.401 Q 49.5 68.701 46.25 72.601 A 19.392 19.392 0 0 1 40.994 76.966 A 25.399 25.399 0 0 1 37.45 78.651 A 31.647 31.647 0 0 1 29.685 80.535 A 40.091 40.091 0 0 1 25 80.801 A 50.793 50.793 0 0 1 15.608 79.961 A 43.491 43.491 0 0 1 11.05 78.851 A 40.585 40.585 0 0 1 4.805 76.412 A 31.652 31.652 0 0 1 0 73.501 Z M 240 73.501 L 247.5 63.101 A 80.225 80.225 0 0 0 250.892 64.963 Q 254.434 66.792 257.15 67.651 Q 261.1 68.901 265.1 68.901 A 32.618 32.618 0 0 0 267.566 68.814 Q 270.489 68.592 272.25 67.801 A 6.054 6.054 0 0 0 273.35 67.174 Q 274.7 66.185 274.7 64.701 Q 274.7 63.101 272.95 62.201 A 12.001 12.001 0 0 0 271.483 61.575 Q 270.723 61.305 269.826 61.078 A 26.372 26.372 0 0 0 268.35 60.751 Q 265.5 60.201 262.1 59.601 Q 258.7 59.001 255.25 58.051 A 25.968 25.968 0 0 1 250.133 56.061 A 23.462 23.462 0 0 1 248.95 55.401 Q 246.1 53.701 244.35 50.951 A 10.654 10.654 0 0 1 242.985 47.62 Q 242.6 45.97 242.6 44.001 Q 242.6 38.501 245.4 34.801 Q 248.2 31.101 253.35 29.151 Q 258.5 27.201 265.3 27.201 A 44.85 44.85 0 0 1 277.209 28.848 A 49.669 49.669 0 0 1 277.4 28.901 Q 283.5 30.601 288.6 34.101 L 280.8 44.001 A 31.048 31.048 0 0 0 275.617 41.191 A 26.717 26.717 0 0 0 272.85 40.201 A 28.69 28.69 0 0 0 266.736 39.067 A 25.752 25.752 0 0 0 264.9 39.001 A 27.248 27.248 0 0 0 262.804 39.076 Q 260.703 39.239 259.325 39.753 A 6.715 6.715 0 0 0 258.85 39.951 A 5.094 5.094 0 0 0 257.929 40.491 Q 257.42 40.874 257.14 41.34 A 2.407 2.407 0 0 0 256.8 42.601 A 2.416 2.416 0 0 0 257.783 44.578 A 4.161 4.161 0 0 0 258.55 45.051 A 11.622 11.622 0 0 0 259.963 45.617 Q 261.36 46.081 263.25 46.401 Q 266.2 46.901 269.7 47.451 Q 273.2 48.001 276.65 48.951 Q 280.1 49.901 283.05 51.651 Q 286 53.401 287.75 56.201 A 10.776 10.776 0 0 1 289.049 59.345 Q 289.387 60.711 289.472 62.31 A 20.65 20.65 0 0 1 289.5 63.401 Q 289.5 68.701 286.25 72.601 A 19.392 19.392 0 0 1 280.994 76.966 A 25.399 25.399 0 0 1 277.45 78.651 A 31.647 31.647 0 0 1 269.685 80.535 A 40.091 40.091 0 0 1 265 80.801 A 50.793 50.793 0 0 1 255.608 79.961 A 43.491 43.491 0 0 1 251.05 78.851 A 40.585 40.585 0 0 1 244.805 76.412 A 31.652 31.652 0 0 1 240 73.501 Z M 73.3 61.601 L 73.3 40.701 L 58.2 40.701 L 58.2 28.201 L 73.3 28.201 L 73.3 13.901 L 89.5 10.601 L 89.5 28.201 L 109 28.201 L 109 40.701 L 89.5 40.701 L 89.5 58.401 Q 89.5 63.301 91.45 65.251 Q 93.4 67.201 98.3 67.201 A 36.659 36.659 0 0 0 101.167 67.084 A 44.883 44.883 0 0 0 103 66.901 A 30.723 30.723 0 0 0 104.872 66.612 Q 106.806 66.257 109.3 65.601 L 109.3 78.701 A 59.264 59.264 0 0 1 106.493 79.372 Q 104.572 79.785 102.35 80.151 Q 98.4 80.801 95.1 80.801 Q 88.055 80.801 83.265 78.737 A 16.653 16.653 0 0 1 78.8 75.951 A 15.469 15.469 0 0 1 74.139 68.313 Q 73.431 65.781 73.32 62.743 A 31.385 31.385 0 0 1 73.3 61.601 Z M 172 54.701 L 172 58.201 L 135 58.201 Q 135.8 61.101 137.6 63.301 Q 139.4 65.501 142 66.701 Q 144.6 67.901 147.6 67.901 A 16.279 16.279 0 0 0 151.521 67.444 A 13.859 13.859 0 0 0 153.95 66.601 Q 156.8 65.301 158.7 62.901 L 169.1 72.201 A 34.176 34.176 0 0 1 164.248 76.109 A 26.036 26.036 0 0 1 158.85 78.851 A 31.827 31.827 0 0 1 151.828 80.503 A 41.055 41.055 0 0 1 146.8 80.801 A 29.43 29.43 0 0 1 137.655 79.414 A 26.451 26.451 0 0 1 132.75 77.251 Q 126.5 73.701 122.8 67.651 A 25.358 25.358 0 0 1 119.104 54.568 A 30.134 30.134 0 0 1 119.1 54.101 A 28.228 28.228 0 0 1 120.326 45.666 A 24.917 24.917 0 0 1 122.6 40.501 Q 126.1 34.501 132.1 30.951 A 25.671 25.671 0 0 1 144.207 27.432 A 30.834 30.834 0 0 1 145.6 27.401 A 29.533 29.533 0 0 1 153.152 28.331 A 24.455 24.455 0 0 1 159.35 30.901 Q 165.3 34.401 168.65 40.551 A 27.451 27.451 0 0 1 171.735 50.347 A 34.82 34.82 0 0 1 172 54.701 Z M 377.3 60.601 L 377.3 40.701 L 359.5 40.701 L 359.5 28.201 L 393.5 28.201 L 393.5 58.901 A 13.958 13.958 0 0 0 393.675 61.195 Q 393.878 62.406 394.313 63.362 A 5.861 5.861 0 0 0 395.6 65.201 A 6.288 6.288 0 0 0 397.768 66.514 Q 398.744 66.879 399.962 67.05 A 16.868 16.868 0 0 0 402.3 67.201 Q 404.5 67.201 406.55 66.801 A 20.642 20.642 0 0 0 408.43 66.336 Q 409.378 66.057 410.406 65.67 A 35.352 35.352 0 0 0 411.1 65.401 L 411.1 78.501 A 10.098 10.098 0 0 1 410.042 78.947 Q 408.973 79.335 407.416 79.712 A 49.22 49.22 0 0 1 405.9 80.051 A 35.707 35.707 0 0 1 401.198 80.72 A 30.428 30.428 0 0 1 399 80.801 Q 391.753 80.801 386.892 78.462 A 16.478 16.478 0 0 1 382.8 75.701 Q 377.891 71.149 377.363 62.693 A 33.616 33.616 0 0 1 377.3 60.601 Z M 436.82 79.549 A 28.632 28.632 0 0 0 445.4 80.801 Q 453 80.801 459.05 77.251 Q 465.1 73.701 468.65 67.651 A 25.301 25.301 0 0 0 470.597 63.525 A 27.241 27.241 0 0 0 472.2 54.101 Q 472.2 46.501 468.65 40.501 Q 465.1 34.501 459.05 30.951 A 25.015 25.015 0 0 0 453.652 28.587 A 28.554 28.554 0 0 0 445.3 27.401 A 31.672 31.672 0 0 0 443.888 27.432 A 26.386 26.386 0 0 0 431.6 30.951 Q 425.5 34.501 421.95 40.501 A 24.877 24.877 0 0 0 419.857 45.007 A 27.192 27.192 0 0 0 418.4 54.001 Q 418.4 61.601 421.95 67.651 Q 425.5 73.701 431.6 77.251 A 25.394 25.394 0 0 0 436.82 79.549 Z M 445.3 67.201 A 10.849 10.849 0 0 0 448.67 66.693 A 9.542 9.542 0 0 0 451.1 65.501 A 11.213 11.213 0 0 0 454.681 61.481 A 13.501 13.501 0 0 0 455 60.851 A 14.379 14.379 0 0 0 456.235 56.613 A 18.475 18.475 0 0 0 456.4 54.101 Q 456.4 50.301 455 47.351 Q 453.6 44.401 451.1 42.701 Q 448.6 41.001 445.3 41.001 Q 442.1 41.001 439.55 42.701 Q 437 44.401 435.6 47.351 A 14.379 14.379 0 0 0 434.365 51.589 A 18.475 18.475 0 0 0 434.2 54.101 Q 434.2 57.901 435.6 60.851 Q 437 63.801 439.55 65.501 Q 442.1 67.201 445.3 67.201 Z M 320.797 79.874 A 10.767 10.767 0 0 0 325.3 80.801 Q 329.8 80.801 332.9 77.701 A 12.27 12.27 0 0 0 332.996 77.604 A 10.205 10.205 0 0 0 336 70.201 Q 336 65.801 332.9 62.701 A 10.512 10.512 0 0 0 329.803 60.528 A 10.767 10.767 0 0 0 325.3 59.601 Q 320.8 59.601 317.7 62.701 A 12.27 12.27 0 0 0 317.604 62.798 A 10.205 10.205 0 0 0 314.6 70.201 Q 314.6 74.601 317.7 77.701 A 10.512 10.512 0 0 0 320.797 79.874 Z M 378.294 17.494 A 9.805 9.805 0 0 0 385.4 20.401 A 11.682 11.682 0 0 0 385.531 20.4 A 9.81 9.81 0 0 0 392.6 17.401 A 12.035 12.035 0 0 0 392.693 17.307 A 9.805 9.805 0 0 0 395.6 10.201 A 11.682 11.682 0 0 0 395.599 10.07 A 9.81 9.81 0 0 0 392.6 3.001 A 12.035 12.035 0 0 0 392.506 2.908 A 9.805 9.805 0 0 0 385.4 0.001 A 11.682 11.682 0 0 0 385.269 0.002 A 9.81 9.81 0 0 0 378.2 3.001 A 12.035 12.035 0 0 0 378.107 3.095 A 9.805 9.805 0 0 0 375.2 10.201 A 11.682 11.682 0 0 0 375.201 10.332 A 9.81 9.81 0 0 0 378.2 17.401 A 12.035 12.035 0 0 0 378.294 17.494 Z M 135.1 49.001 L 157 49.001 A 15.338 15.338 0 0 0 156.134 46.403 A 11.675 11.675 0 0 0 154.8 44.101 Q 153.3 42.101 151.1 41.051 A 10.732 10.732 0 0 0 147.791 40.103 A 13.567 13.567 0 0 0 146.1 40.001 A 12.107 12.107 0 0 0 142.75 40.453 A 10.836 10.836 0 0 0 141.15 41.051 Q 138.9 42.101 137.4 44.101 A 12.911 12.911 0 0 0 135.9 46.714 A 17.224 17.224 0 0 0 135.1 49.001 Z'
              }
            />
          </svg>
          <div className={cssModule.hiddenPageTitleContainer}>
            <div
              className={cssModule.pageTitle}
              role={'heading'}
              aria-level={'1'}
            >
              stews.io
            </div>
          </div>
        </div>
        <div className={cssModule.pageMainContainer} role={'main'}>
          <div className={cssModule.sectionContainer}>
            <div
              className={cssModule.sectionTitle}
              role={'heading'}
              aria-level={'2'}
            >
              what?
            </div>
            <div className={cssModule.sectionParagraph} role={'paragraph'}>
              a project empowering individuals and communities in their quest to
              curate and share
            </div>
          </div>
          <div className={cssModule.sectionContainer}>
            <div
              className={cssModule.sectionTitle}
              role={'heading'}
              aria-level={'2'}
            >
              where?
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                phase 0
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                a collection of curations demonstrating the potential of a more
                human web
              </div>
              <div className={cssModule.curationSectionContainer}>
                <div className={cssModule.curationList}>
                  <div className={cssModule.curationItem}>
                    <div className={cssModule.curationItemTitle}>
                      <a
                        className={cssModule.curationLink}
                        href={'https://clumsycomputer.stews.io'}
                        target={'_blank'}
                      >
                        clumsycomputer
                      </a>
                    </div>
                    <div
                      className={cssModule.curationItemDescription}
                      role={'paragraph'}
                    >
                      a collection of great music and awesome spots
                    </div>
                  </div>
                  <div className={cssModule.curationItem}>
                    <div className={cssModule.curationItemTitle}>
                      <a
                        className={cssModule.curationLink}
                        href={'https://prettylights.stews.io'}
                        target={'_blank'}
                      >
                        pl-archive
                      </a>
                    </div>
                    <div
                      className={cssModule.curationItemDescription}
                      role={'paragraph'}
                    >
                      an extensive catalog of the Pretty Lights musical project
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                phase 1
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                provide a simple cli for creating and managing curations
              </div>
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                phase N
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                continue improving the ergonomics around sharing and curating
                this world of ours
              </div>
            </div>
          </div>
          <div className={cssModule.sectionContainer}>
            <div
              className={cssModule.sectionTitle}
              role={'heading'}
              aria-level={'2'}
            >
              wanna assist?
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                developers
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                y'all know what it is, head on over to{' '}
                <a
                  className={cssModule.paragraphLink}
                  href={'https://github.com/clumsycomputer/stews.io'}
                  target={'_blank'}
                >
                  github
                </a>{' '}
                and jump on in
              </div>
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                investors
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                we're seeking venture investment, and applying to accelerator
                programs! if you're interested in participating in our first
                round of fundraising, go holler at{' '}
                <a
                  className={cssModule.paragraphLink}
                  href={'mailto:business@stews.io'}
                >
                  business@stews.io
                </a>
              </div>
            </div>
            <div className={cssModule.subSectionContainer}>
              <div
                className={cssModule.subSectionTitle}
                role={'heading'}
                aria-level={'3'}
              >
                curators
              </div>
              <div className={cssModule.sectionParagraph} role={'paragraph'}>
                you can get started today, but rough edges abound. we're working
                diligently on smoothing things out and providing y'all with the
                tools you need, for sharing your world, the way it deserves
              </div>
            </div>
          </div>
          <div className={cssModule.pageFooter} />
        </div>
      </div>
    </div>
  )
}
