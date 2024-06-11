import groupBy from 'lodash/groupBy';

export function getVariations(variations: object | undefined) {
  if (!variations) return {};
  console.log(variations, groupBy(variations, 'slug'), 'kya ho rha h');
  return groupBy(variations, 'attribute.slug');
}
