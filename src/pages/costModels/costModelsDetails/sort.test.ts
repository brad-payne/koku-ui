import { SortByDirection } from '@patternfly/react-table';
import { costModelsTableMap, getSortByData, reverseMap } from './sort';

test('reverseMap', () => {
  expect(reverseMap(costModelsTableMap)).toEqual({
    0: 'name',
    2: 'source_type',
    4: 'updated_timestamp',
  });
});

describe('getSortByData', () => {
  test('-name', () => {
    expect(getSortByData('-name', costModelsTableMap)).toEqual({
      index: 0,
      direction: SortByDirection.desc,
    });
  });
  test('updated_timestamp', () => {
    expect(getSortByData('updated_timestamp', costModelsTableMap)).toEqual({
      index: 4,
      direction: SortByDirection.asc,
    });
  });
  test('null', () => {
    expect(getSortByData(null, costModelsTableMap)).toEqual({});
  });
});
