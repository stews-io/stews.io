import { CurationItem } from '@stews/data/CurationItem'
import {
  AdjustedCurationSegment,
  ClientCurationSegment,
  SegmentSortOption,
} from '@stews/data/CurationSegment'
import { ClientCuratorConfig } from '@stews/data/CuratorConfig'
import { MusicItemDisplay } from '@stews/domains/music/components'
import { MusicItem } from '@stews/domains/music/data'
import { SpotItemDisplay } from '@stews/domains/spot/components'
import { SpotItem } from '@stews/domains/spot/data'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import { AppRouterProps } from '../components/AppRouter'
import {
  AdjustedCurationDataset,
  SegmentSortOptionConfig,
} from '@stews/data/CurationDataset'

export interface UseClientCuratorConfigApi
  extends Pick<AppRouterProps, 'adjustedCuratorConfig'> {}

export function useClientCuratorConfig(api: UseClientCuratorConfigApi) {
  const { adjustedCuratorConfig } = api
  return useMemo<{
    clientCuratorConfig: ClientCuratorConfig
  }>(
    () => ({
      clientCuratorConfig: {
        curatorInfo: adjustedCuratorConfig.curatorInfo,
        curationSegments: adjustedCuratorConfig.curationSegments.map<
          ClientCurationSegment<any>
        >((someAdjustedCurationSegment): ClientCurationSegment<any> => {
          const segmentDataset =
            adjustedCuratorConfig.curationDatasets[
              someAdjustedCurationSegment.segmentDatasetId
            ] ?? throwInvalidPathError('useClientCuratorConfig.segmentDataset')
          const segmentDatasetTypeConfig =
            segmentDataset.datasetType === 'music'
              ? {
                  SegmentItemDisplay: MusicItemDisplay,
                  getSegmentItemSearchSpace: (someMusicItem: MusicItem) =>
                    `${
                      someMusicItem.musicTitle
                    },${someMusicItem.musicArtist.join(
                      ','
                    )},${someMusicItem.musicTags.join(',')},${
                      someMusicItem.musicYear
                    },${`${someMusicItem.recordingContext.join('/')} ${
                      someMusicItem.sourceType === 'collection'
                        ? someMusicItem.collectionType
                        : someMusicItem.sourceType
                    }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`,
                  segmentSortOptions: getSegmentSortOptions({
                    someAdjustedSegmentDataset: segmentDataset,
                  }),
                }
              : segmentDataset.datasetType === 'spot'
              ? {
                  SegmentItemDisplay: SpotItemDisplay,
                  getSegmentItemSearchSpace: (someSpotItem: SpotItem) =>
                    `${someSpotItem.spotName},${
                      someSpotItem.spotLocation
                    },${someSpotItem.spotTags.join(',')}`,
                  segmentSortOptions: getSegmentSortOptions({
                    someAdjustedSegmentDataset: segmentDataset,
                  }) as unknown as ArrayOfAtLeastOne<
                    SegmentSortOption<CurationItem>
                  >,
                }
              : throwInvalidPathError(
                  'useClientCuratorConfig.segmentDatasetTypeConfig'
                )
          return {
            segmentId: someAdjustedCurationSegment.segmentId,
            segmentLabel: someAdjustedCurationSegment.segmentLabel,
            segmentDatasetId: someAdjustedCurationSegment.segmentDatasetId,
            segmentViews: someAdjustedCurationSegment.segmentViews,
            ...segmentDatasetTypeConfig,
          }
        }) as ArrayOfAtLeastOne<ClientCurationSegment<CurationItem>>,
      },
    }),
    []
  )
}

interface GetSegmentSortOptionsApi<SomeCurationItem extends CurationItem> {
  someAdjustedSegmentDataset: AdjustedCurationDataset<SomeCurationItem>
}

function getSegmentSortOptions<SomeCurationItem extends CurationItem>(
  api: GetSegmentSortOptionsApi<SomeCurationItem>
): ArrayOfAtLeastOne<SegmentSortOption<SomeCurationItem>> {
  const { someAdjustedSegmentDataset } = api
  return someAdjustedSegmentDataset.datasetSortConfig.reduce(
    (viewSortOptionsResult, someSortOptionConfig) => {
      if (someSortOptionConfig.fieldType === 'string') {
        pushStringSortOptions({
          viewSortOptionsResult,
          someSortOptionConfig,
        })
      } else if (someSortOptionConfig.fieldType === 'orderedStringSet') {
        pushOrderedStringSetSortOptions({
          viewSortOptionsResult,
          someSortOptionConfig,
        })
      } else if (someSortOptionConfig.fieldType === 'number') {
        pushNumberSortOptions({
          viewSortOptionsResult,
          someSortOptionConfig,
        })
      } else {
        throwInvalidPathError('useViewSortOrderOptions')
      }
      return viewSortOptionsResult
    },
    [] as unknown as ArrayOfAtLeastOne<SegmentSortOption<SomeCurationItem>>
  )
}

interface PushStringSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushStringSortOptions<SomeCurationItem extends CurationItem>(
  api: PushStringSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushStringSortOptionsBase({
    viewSortOptionsResult,
    someSortOptionConfig,
    getFieldValue: (someItem, itemFieldKey) => {
      const fieldValue = someItem[itemFieldKey]
      return typeof fieldValue === 'string'
        ? fieldValue
        : throwInvalidPathError('pushStringSortOptions.getFieldValue')
    },
  })
}

interface PushOrderedStringSetSortOptionsApi<
  SomeCurationItem extends CurationItem
> extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushOrderedStringSetSortOptions<SomeCurationItem extends CurationItem>(
  api: PushOrderedStringSetSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushStringSortOptionsBase({
    viewSortOptionsResult,
    someSortOptionConfig,
    getFieldValue: (someItem, itemFieldKey) => {
      const fieldValue = someItem[itemFieldKey]
      return fieldValue instanceof Array && typeof fieldValue[0] === 'string'
        ? fieldValue[0]
        : throwInvalidPathError('pushStringSortOptions.getFieldValue')
    },
  })
}

interface PushStringSortOptionsBaseApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {
  getFieldValue: (
    someItem: SomeCurationItem,
    fieldKey: PushSortOptionsDataApi<SomeCurationItem>['someSortOptionConfig']['fieldKey']
  ) => string
}

function pushStringSortOptionsBase<SomeCurationItem extends CurationItem>(
  api: PushStringSortOptionsBaseApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig, getFieldValue } = api
  pushSortOptions({
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension: 'a → z',
    descendingSortLabelExtension: 'z → a',
    getAscendingSortOrder: (itemA, itemB) => {
      const fieldValueA = getFieldValue(itemA, someSortOptionConfig.fieldKey)
      const fieldValueB = getFieldValue(itemB, someSortOptionConfig.fieldKey)
      return fieldValueA.localeCompare(fieldValueB)
    },
    getDescendingSortOrder: (itemA, itemB) => {
      const fieldValueA = getFieldValue(itemA, someSortOptionConfig.fieldKey)
      const fieldValueB = getFieldValue(itemB, someSortOptionConfig.fieldKey)
      return fieldValueB.localeCompare(fieldValueA)
    },
  })
}

interface PushNumberSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushNumberSortOptions<SomeCurationItem extends CurationItem>(
  api: PushNumberSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushSortOptions({
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension: '0 → 9',
    descendingSortLabelExtension: '9 → 0',
    getAscendingSortOrder: (itemA, itemB) => {
      const fieldValueA = itemA[someSortOptionConfig.fieldKey]
      const fieldValueB = itemB[someSortOptionConfig.fieldKey]
      return typeof fieldValueA === 'number' && typeof fieldValueB === 'number'
        ? fieldValueA - fieldValueB
        : throwInvalidPathError('pushNumberSortOptions.getAscendingSortOrder')
    },
    getDescendingSortOrder: (itemA, itemB) => {
      const fieldValueA = itemA[someSortOptionConfig.fieldKey]
      const fieldValueB = itemB[someSortOptionConfig.fieldKey]
      return typeof fieldValueA === 'number' && typeof fieldValueB === 'number'
        ? fieldValueB - fieldValueA
        : throwInvalidPathError('pushNumberSortOptions.getDescendingSortOrder')
    },
  })
}

interface PushSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem>,
    PushSortOptionsConfigApi<SomeCurationItem> {}

interface PushSortOptionsDataApi<SomeCurationItem extends CurationItem> {
  viewSortOptionsResult: ArrayOfAtLeastOne<SegmentSortOption<SomeCurationItem>>
  someSortOptionConfig: SegmentSortOptionConfig<SomeCurationItem>
}

interface PushSortOptionsConfigApi<SomeCurationItem extends CurationItem> {
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
  getAscendingSortOrder: SegmentSortOption<SomeCurationItem>['getSortOrder']
  getDescendingSortOrder: SegmentSortOption<SomeCurationItem>['getSortOrder']
}

function pushSortOptions<SomeCurationItem extends CurationItem>(
  api: PushSortOptionsApi<SomeCurationItem>
) {
  const {
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension,
    getAscendingSortOrder,
    descendingSortLabelExtension,
    getDescendingSortOrder,
  } = api
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}Ascending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${ascendingSortLabelExtension}`,
    getSortOrder: getAscendingSortOrder,
  })
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}Descending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${descendingSortLabelExtension}`,
    getSortOrder: getDescendingSortOrder,
  })
}
