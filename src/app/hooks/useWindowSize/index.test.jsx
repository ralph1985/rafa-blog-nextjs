import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize from './index';

describe('useWindowSize', () => {
  const originalWindow = global.window;

  beforeEach(() => {
    global.window = {
      ...originalWindow,
      innerWidth: 320,
      innerHeight: 320,
    };
  });

  afterEach(() => {
    global.window = originalWindow;
  });

  it('should return the initial size of the window', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(320);
    expect(result.current.height).toBe(320);
  });

  it('should update window size on resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      global.window.innerWidth = 640;
      global.window.innerHeight = 480;
      global.window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(640);
    expect(result.current.height).toBe(480);
  });
});
