// launchcode.test.js code:
const { hasUncaughtExceptionCaptureCallback } = require('process');
const launchcode = require('../index.js');

describe("launchcode", function(){

  test('check organization value', function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test('check executiveDirector value', function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  test('check percentageCoolEmployees value', function(){
    expect(launchcode.percentageCoolEmployees).toEqual("launchcode");
  });
  test('check programsOffered value', function(){
    expect(launchcode.programsOffered.length).toEqual(3);
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
  });

});

describe("launchOutput()", function(){

  test('should pass num that is ONLY divisible by 2 & returns "Launch!"', function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });
  test('should pass num that is ONLY divisible by 3 & returns "Code!"', function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  test('should pass num that is ONLY divisible by 5 & returns "Rocks!"', function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  });
  test('should pass num that is divisble by 2 AND 3 returns "LaunchCode!"', function(){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test('should pass num that is divisible by 3 AND 5, returns "Code Rocks!', function(){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test('should pass num that is divisble by 2 AND 5, returns "Launch Rocks!', function(){
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)")
  });
  test('should pass num that is divisble by 2 AND 3 AND 5, returns "LaunchCode Rocks!"', function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  test('should pass num that is NOT divisible by 2, 3, OR 5, returns "Rutabagas! That doesnt work."', function(){
    expect(launchcode.launchOutput(13)).toBe(`Rutabagas! That doesn't work.`);
  })
});