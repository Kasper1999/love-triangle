/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var k=[3, 9, 12, 6, 13, 16, 15, 3, 14, 5, 4, 1, 10, 2, 4, 4, 10, 14, 11];

  var z=[]; 
  var j=0;
  var povt=0; var r=0;  
  var first;
  var tr=0;
  for(var l=0;l<preferences.length;l++){
    first=l+1;
      for (var i=l;tr==0 && r<preferences.length;i=j-1)
    {
     
     j=preferences[i];
     r++;
     if(preferences[i]!=i+1){
     if(preferences[i]==first) {tr++; povt+=tr;}}
     
    }tr=0;r=0;
    }
  
    return Math.trunc(povt/3);
};
