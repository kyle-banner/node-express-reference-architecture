export default class DomainToEntityMapper<T, U> {
  map: (domain: T) => U;
}
