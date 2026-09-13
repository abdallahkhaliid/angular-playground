import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const servers = [
    { name: 'Production Server', status: 'stable' },
    { name: 'Development Server', status: 'offline' },
    { name: 'Testing Server', status: 'critical' },
  ];

  it('should return all items when filter is empty', () => {
    expect(pipe.transform(servers, '', 'status')).toEqual(servers);
  });

  it('should filter case-insensitively by prop', () => {
    expect(pipe.transform(servers, 'STABLE', 'status')).toEqual([servers[0]]);
    expect(pipe.transform(servers, 'off', 'status')).toEqual([servers[1]]);
  });

  it('should return empty array for null input', () => {
    expect(pipe.transform(null, 'stable', 'status')).toEqual([]);
  });
});
