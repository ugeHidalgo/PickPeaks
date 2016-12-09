function pickPeaks(arr){
  var result = {
        pos: [],        
        peaks: []
      }, 
      arrLength = arr.length,
      peakPos,
      peak;

  if (arrLength<3) return result;

  for (var f=1; f<arrLength; f++) {
    if (arr[f-1]<arr[f]) {
      peak = arr[f];
      peakPos = f;
      while (arr[f+1]===peak){
        f++;
      }      
      if (peak>arr[f+1]) {
        result.pos.push(peakPos);
        result.peaks.push(peak);
      }
    }
  }
  return result;
}