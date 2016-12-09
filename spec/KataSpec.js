describe('Kata', function() {    
    var emptyObject = {pos:[],peaks:[]};
        customMatchers = {
        toBeSimilar: function(util, customEqualityTesters) {

          return {
            compare: function(actual, expected) {
              pass = true;
              result = {};

              if (actual.pos.length !== expected.pos.length ||
                  actual.peaks.length !== expected.peaks.length){
                pass = false;
              }
            
              if (pass) {
                for (var f=0; f<actual.pos.length; f++){
                  if (actual.pos[f]!== expected.pos[f])
                    pass = false;
                }
              }

              if (pass) {
                for (var f=0; f<actual.peaks.length; f++){
                  if (actual.peaks[f]!== expected.peaks[f])
                    pass = false;
                }
              }
              if (pass) {
                result.message = 'Objects are similar.';
              } else {
                result.message = 'Objects are not similar';
              }
              result.pass = pass;
              return result;
            }
          }
        }
      }

    beforeEach(function() { 
       jasmine.addMatchers(customMatchers);
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('addMatchers : toBeSimilar returns', function () {

      it('false when objects have different length.', function() { 
          var actual = {pos:[3,7],peaks:[6,3]},
              expected = {pos:[3],peaks:[6]};

          expect(actual).not.toBeSimilar(expected);
      });

      it('false when objects are different.', function() { 
          var actual = {pos:[3,7],peaks:[6,3]},
              expected = {pos:[2,5],peaks:[1,4]};

          expect(actual).not.toBeSimilar(expected);
      });

      it('true when objects are similars (One element).', function() { 
          var actual = {pos:[3,7],peaks:[6,3]},
              expected = {pos:[3,7],peaks:[6,3]};
              
          expect(actual).toBeSimilar(expected);
      });

      it('true when objects are similars (Two elements).', function() { 
          var actual = {pos:[3],peaks:[6]},
              expected = {pos:[3],peaks:[6]};
              
          expect(actual).toBeSimilar(expected);
      });
    });

    describe ('should return an empty object when',function(){
        it('array is empty.', function() {
          var peaks = pickPeaks([]);
      
          expect(peaks).toBeSimilar(emptyObject);
        });

        it('array has one element.', function() {
          var peaks = pickPeaks([2]);
      
          expect(peaks).toBeSimilar(emptyObject);
        });

        it('array has two elements.', function() {
          var peaks = pickPeaks([1,2]);
      
          expect(peaks).toBeSimilar(emptyObject);
        });
    });

    it('should be able to find a peak in [1,2,1]', function() {
          var peaks = pickPeaks([1,2,1]);
      
          expect(peaks).toBeSimilar({pos:[1],peaks:[2]});
    });

    it('should be able to find a peak in [1,2,3,1]', function() {
          var peaks = pickPeaks([1,2,3,1]);
      
          expect(peaks).toBeSimilar({pos:[2],peaks:[3]});
    });

    it('should be able to find two peaks in [1,2,1,3,1]', function() {
          var peaks = pickPeaks([1,2,1,3,1]);
      
          expect(peaks).toBeSimilar({pos:[1,3],peaks:[2,3]});
    });

    describe ('should be able to deal with flat lands', function(){
        it('Sample #1 : peaks in [1,2,1]', function() {
          var peaks = pickPeaks([1,2,1]);
    
          expect(peaks).toBeSimilar({pos:[1],peaks:[2]});
        });

        it('Sample #2 : peaks in [1,2,2,1]', function() {
          var peaks = pickPeaks([1,2,2,1]);
    
          expect(peaks).toBeSimilar({pos:[1],peaks:[2]});
        });

        it('Sample #3 : peaks in [1,2,2,2,1]', function() {
          var peaks = pickPeaks([1,2,2,2,1]);
    
          expect(peaks).toBeSimilar({pos:[1],peaks:[2]});
        });

        it('Sample #4 : peaks in [1,2,2,3]', function() {
          var peaks = pickPeaks([1,2,2,3]);
    
          expect(peaks).toBeSimilar(emptyObject);
        });

        it('Sample #5 : peaks in [1,2,2,1,3,3,3,2]', function() {
          var peaks = pickPeaks([1,2,2,1,3,3,3,2]);
    
          expect(peaks).toBeSimilar({pos:[1,4],peaks:[2,3]});
        });
    });

    describe ('should be able to run kata examples', function(){
        it('Sample #1 : peaks in [3,2,3,6,4,1,2,3,2,1,2,3]', function() {
          var peaks = pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]);
    
          expect(peaks).toBeSimilar({pos:[3,7],peaks:[6,3]});
        });
    }); 
});