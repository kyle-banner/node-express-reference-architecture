export default class EntityToDomainMapper<T, U> {
  map: (entity: T) => U;
}
