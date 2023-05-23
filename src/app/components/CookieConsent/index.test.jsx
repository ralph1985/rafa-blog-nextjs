import { render, screen, fireEvent } from '@testing-library/react';
import CookieConsent from './index';

describe('CookieConsent', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  it('should render CookieConsent', () => {
    render(<CookieConsent />);

    const cookieConsent = screen.getByTestId('cookieConsent');

    expect(cookieConsent).toBeInTheDocument();
  });

  it('should set consent when accept button is clicked', () => {
    render(<CookieConsent />);

    const acceptButton = screen.getByRole('button', { name: /accept/i });

    fireEvent.click(acceptButton);

    const isConsentGiven = sessionStorage.getItem('cookieConsent');

    expect(isConsentGiven).toBe('true');
  });

  it('should show CookieConsent if no consent has been given', () => {
    render(<CookieConsent />);

    const cookieConsent = screen.getByTestId('cookieConsent');

    expect(cookieConsent).toBeInTheDocument();
  });

  it('should not show CookieConsent if consent has been given', () => {
    sessionStorage.setItem('cookieConsent', 'true');

    render(<CookieConsent />);

    let thereIsACookieLayer;

    try {
      screen.getByTestId('cookieConsent');
      thereIsACookieLayer = true;
    } catch {
      // Noop
      thereIsACookieLayer = false;
    }

    expect(thereIsACookieLayer).toBe(false);
  });
});
