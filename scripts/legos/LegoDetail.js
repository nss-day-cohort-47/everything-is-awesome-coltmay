import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {

  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3>Name: ${brick.LegoName.toUpperCase()}</h3>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              `;

  const link = brick.ColorstreamLinkImage;
  const notes = brick.Notes;

  // If Else Statements...
  // If 'link' exists and there are notes, wrap in link and append note to end.
  if (link !== "" && notes !== "") {
    return (
      `<a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
          ${block}
          <p>${notes}</p>
      </a>
      </section>
          `);
    // If link exists and there are no notes, wrap in link
  } else if (link !== "" && notes === "") {
    return (
      `<a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
      ${block}
      </a>
      </section>
      `);
    // If link does not exist, but there are notes, append notes.
  } else if (link === "" && notes !== "") {
    return (
      `
      ${block}
      <p>${notes}</p>
      </section>
      `);
    // If link does not exist, and notes do not exist, just return block
  } else {
    return (
      `
      ${block}
      </section>
      `);
  }
}