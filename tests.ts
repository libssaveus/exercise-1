// Stress test are ignored
function runUnitTest() {

  const cases: {input: string[], output: number}[] = [
    { input: ['pippo', 'pluto', 'paperino'], output: 2},
    { input: ["aa","bb","          ", "    "], output: 4},
    { input: ["a","b","cc"], output: 1},
    { input: ["a","b"], output: 0},
    { input: ["ABC","deef","hi", "mnmn"], output: 2},
    { input: ['1', '11', '111'], output: 2}
  ] 

  for(let caseDetail of cases) {
    const testOutput = doubleCharsInWords(caseDetail.input);
    if(testOutput !== caseDetail.output){
      console.error("Test not passed !");
      console.error("Input:", caseDetail.input);
      console.error("Returned result:", testOutput, "(Expected): ", caseDetail.output);
    } else { 
      console.log("Test ok");
    }
  }
}
