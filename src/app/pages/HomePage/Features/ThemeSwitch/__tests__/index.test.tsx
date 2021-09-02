import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeSwitch } from '..';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Store } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

const renderThemeSwitch = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    </Provider>,
  );
describe('<ThemeSwitch />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should have 3 radio Button', () => {
    const languageSwitch = renderThemeSwitch(store);
    expect(languageSwitch.queryAllByRole('radio').length).toBe(3);
    languageSwitch.unmount();
  });

  it('should switch theme on click', () => {
    const languageSwitch = renderThemeSwitch(store);
    const radioButton = languageSwitch.queryAllByRole(
      'radio',
    ) as HTMLInputElement[];

    expect(radioButton[0].checked).toBe(true);

    fireEvent.click(radioButton[1]);

    expect(radioButton[1].checked).toBe(true);
  });
});
