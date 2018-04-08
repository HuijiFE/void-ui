// tslint:disable:no-console
// tslint:disable:no-relative-imports
// tslint:disable:missing-jsdoc

console.log('\n/*-------- theme --------*/\n');

{
  const keysAll: string[] = ['lite', 'dark'];
  const fgAll: string[] = ['emphasize', 'normal', 'sub', 'placeholder', 'disabled'];
  const bgAll: string[] = [
    'higher',
    'high',
    'normal',
    'low',
    'lower',
    'hover',
    'disabled',
  ];
  const bdAll: string[] = ['normal', 'disabled', 'focus'];

  let max: number = '--vd-theme-lite-fg-emphasize:     #000000;'.length;
  console.log(
    keysAll
      .map(key => {
        return [
          ...fgAll.map(fg => `fg-${fg}`),
          '',
          ...bgAll.map(bg => `bg-${bg}`),
          '',
          ...bdAll.map(bd => `bd-${bd}`),
        ]
          .map(fix => (fix ? `--vd-theme-${key}-${fix}: #000000;` : ''))
          .map(text => text.replace(' ', ' '.repeat(max - text.length + 1)))
          .join('\n');
      })
      .join('\n\n'),
  );

  console.log();

  max = 'lite-fg-emphasize:    var(--vd-theme-lite-fg-emphasize),'.length;
  console.log(
    keysAll
      .map(key => {
        return [
          ...fgAll.map(fg => `fg-${fg}`),
          '',
          ...bgAll.map(bg => `bg-${bg}`),
          '',
          ...bdAll.map(bd => `bd-${bd}`),
        ]
          .map(fix => (fix ? `${key}-${fix}: var(--vd-theme-${key}-${fix}),` : ''))
          .map(text => text.replace(' ', ' '.repeat((max - text.length + 1) / 2 + 2)))
          .join('\n');
      })
      .join('\n\n'),
  );
}

console.log('\n/*-------- tone --------*/\n');

{
  const keysAll: string[] = ['primary', 'secondary', 'success', 'warning', 'danger'];
  const degreesAll: string[] = ['darkener', 'darken', 'standard', 'lighten', 'lightener'];

  let max: number = '--vd-tone-secondary-lightener:    #000000;'.length;
  console.log(
    keysAll
      .map(key => {
        return degreesAll
          .map(degree => `--vd-tone-${key}-${degree}: #000000;`)
          .map(text => text.replace(' ', ' '.repeat(max - text.length + 1)))
          .join('\n');
      })
      .join('\n\n'),
  );

  console.log();

  max = 'secondary-lightener:    var(--vd-tone-secondary-lightener),'.length;
  console.log(
    keysAll
      .map(key => {
        return degreesAll
          .map(degree => `${key}-${degree}: var(--vd-tone-${key}-${degree}),`)
          .map(text => text.replace(' ', ' '.repeat((max - text.length + 1) / 2)))
          .join('\n');
      })
      .join('\n\n'),
  );
}

console.log();
