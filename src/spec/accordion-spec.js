import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton, toggleDetails } from '../js/accordion/helpers';

describe('Accordion', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="tater-tots" aria-expanded="false">Tots</button>
          <button class="potato">Potato</button>
          <button class="haters" aria-expanded="true" aria-controls="potates-section">Haters gonna hate</button>
          <div class="potates" id="potates-section" aria-hidden="false">Potatoes gonna potate</div>
        </body>
      </html>`, { url: 'http://localhost' },
    );

    global.window = dom.window;
    global.document = dom.window.document;
  })

  it('sets aria-expanded to true, when initially set to false', () => {
    const taterTotButton = document.querySelector('.tater-tots');
    toggleButton(taterTotButton);
    
    const taterTotAria = taterTotButton.getAttribute('aria-expanded');
    expect(taterTotAria).to.equal('true');
  })

  it('set aria-expanded to true, after it was set to false', () => {
    const taterTotButton = document.querySelector('.tater-tots');
    toggleButton(taterTotButton);
    toggleButton(taterTotButton);
    
    const taterTotAria = taterTotButton.getAttribute('aria-expanded');
    expect(taterTotAria).to.equal('false');
  })

  it('does not set aria-expanded if the attribute wasnt on the element to begin with', () => {
    const potato = document.querySelector('.potato');
    toggleButton(potato);

    expect(potato.getAttribute('aria-expanded')).to.equal(null);
  })

  it('set aria-hidden of content to true, when initially set to false', () => {
    const button = document.querySelector('.haters');
    const section = document.querySelector('.potates');
    toggleDetails(button);

    const sectionAria = section.getAttribute('aria-hidden');
    expect(sectionAria).to.equal('true');
  })

  it('set aria-hidden of content to false, when initially set to true', () => {
    const button = document.querySelector('.haters');
    const section = document.querySelector('.potates');
    toggleDetails(button);
    toggleDetails(button);

    const sectionAria = section.getAttribute('aria-hidden');
    expect(sectionAria).to.equal('false');
  })
})