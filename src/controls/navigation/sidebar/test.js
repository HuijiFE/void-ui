function test() {
  setTimeout(a => {
    console.log('lambda a');
  }, 0);

  console.log('test');
}

test();
