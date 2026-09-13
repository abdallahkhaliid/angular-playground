import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  const pipe = new ShortenPipe();

  it('should return empty string for nullish values', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should leave short strings untouched', () => {
    expect(pipe.transform('abc', 10)).toBe('abc');
  });

  it('should truncate long strings with default limit', () => {
    expect(pipe.transform('Testing Environment Server')).toBe('Testing En ...');
  });

  it('should respect a custom limit', () => {
    expect(pipe.transform('Production Server', 15)).toBe('Production Serv ...');
  });
});
