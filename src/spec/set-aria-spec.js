import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import setInitialAriaValue from '../js/helpers/set-aria';

describe('Set Aria Value', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="button button--friends" aria-expanded="true">Friends</button>
          <button class="button button--waffles" aria-expanded="true">Waffles</button>
          <button class="button button--work" aria-expanded="true">Work</button>
        </body>
      </html>`, { url: 'http://localhost' },
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it('Sets initial aria value on page load', () => {
    const buttons = document.querySelectorAll('.button');
    setInitialAriaValue(buttons, 'aria-expanded', false);

    const wafflesAria = buttons[1].getAttribute('aria-expanded');
    expect(wafflesAria).to.equal('false');
  })

  it('does not set aria value if there is no matching aria attribute', () => {
    const buttons = document.querySelectorAll('.button');
    setInitialAriaValue(buttons, 'aria-hidden', true);

    const workButton = buttons[2].outerHTML;
    expect(workButton).to.not.include('aria-hidden');
  })
})