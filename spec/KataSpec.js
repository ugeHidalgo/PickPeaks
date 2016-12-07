describe('Kata', function() {    
    var customMatchers = {
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

      it('true when objects are similars.', function() { 
          var actual = {pos:[3,7],peaks:[6,3]},
              expected = {pos:[3,7],peaks:[6,3]};
              
          expect(actual).toBeSimilar(expected);
      });
    });

 /*   it('should be able run kata examples ', function() {
          var peaks = pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]);
      
          expect(peaks).toBeSimilar({pos:[3,7],peaks:[6,3]});
    }); */
});