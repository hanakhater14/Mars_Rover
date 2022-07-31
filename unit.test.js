let executeCommand= require('./mars_rover');

beforeEach(() => {
    jest.resetModules()
    executeCommand = require('./mars_rover')
  })

test("test1",()=>{
    let val=executeCommand("F");
    console.log(val);
    expect(val).toBe("1,3,North ");
});
test("test2",()=>{
    let val=executeCommand("B");
    console.log(val);
    expect(val).toBe("1,1,North ");
});
test("test3",()=>{
    let val=executeCommand("L");
    console.log(val);
    expect(val).toBe("1,2,West ");
});
test("test4",()=>{
    let val=executeCommand("R");
    console.log(val);
    expect(val).toBe("1,2,East ");
});
test("test5",()=>{
    let val=executeCommand("FF");
    console.log(val);
    expect(val).toBe("1,3,North STOPPED");
});
test("test6",()=>{
    let val=executeCommand("FLF");
    console.log(val);
    expect(val).toBe("2,3,West ");
});
test("test7",()=>{
    let val=executeCommand("FLFFFRFLB");
    console.log(val);
    expect(val).toBe("3,4,West ");
});
test("test8",()=>{
    let val=executeCommand("FFFRFFF");
    console.log(val);
    expect(val).toBe("1,3,North STOPPED");
});
test("test9",()=>{
    let val=executeCommand("RFFRFFF");
    console.log(val);
    expect(val).toBe("3,4,South STOPPED");
});
test("test10",()=>{
    let val=executeCommand("FBLB");
    console.log(val);
    expect(val).toBe("0,2,West ");
});
test("test11",()=>{
    let val=executeCommand("RFFFFFFRFF");
    console.log(val);
    expect(val).toBe("7,3,South STOPPED");
});
test("test12",()=>{
    let val=executeCommand("FB");
    console.log(val);
    expect(val).toBe("1,2,North ");
});
test("test13",()=>{
    let val=executeCommand("FRRRR");
    console.log(val);
    expect(val).toBe("1,3,North ");
});
test("test14",()=>{
    let val=executeCommand("BLLLL");
    console.log(val);
    expect(val).toBe("1,1,North ");
});
test("test15",()=>{
    let val=executeCommand("BBB");
    console.log(val);
    expect(val).toBe("1,-1,North ");
});
