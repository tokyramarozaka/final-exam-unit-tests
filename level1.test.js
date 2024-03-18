
    import { describe } from 'mocha';
    import { expect } from 'chai';
    import { level1 } from './level1.js';

    describe('Battle Dev Level 1 : Genetics', function () {
      
      it('Should return AYZ with the input AYC,AYZ', function () {
          const input = ["AYC","AYZ"];
          const expectedOutput = 'AYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
      it('Should return AYC with the input AYC,ABC', function () {
          const input = ["AYC","ABC"];
          const expectedOutput = 'AYC';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XYZ with the input XYC,XYZ', function () {
          const input = ["XYC","XYZ"];
          const expectedOutput = 'XYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XYC with the input XYC,AYC', function () {
          const input = ["XYC","AYC"];
          const expectedOutput = 'XYC';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XYZ with the input AYZ,XBZ', function () {
          const input = ["AYZ","XBZ"];
          const expectedOutput = 'XYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XBC with the input XBC,XBC', function () {
          const input = ["XBC","XBC"];
          const expectedOutput = 'XBC';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return AYZ with the input AYC,AYZ', function () {
          const input = ["AYC","AYZ"];
          const expectedOutput = 'AYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XYC with the input AYC,XYC', function () {
          const input = ["AYC","XYC"];
          const expectedOutput = 'XYC';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return ABC with the input ABC,ABC', function () {
          const input = ["ABC","ABC"];
          const expectedOutput = 'ABC';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return XYZ with the input AYC,XBZ', function () {
          const input = ["AYC","XBZ"];
          const expectedOutput = 'XYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
      it('Should return AYZ with the input ABZ,AYC', function () {
          const input = ["ABZ","AYC"];
          const expectedOutput = 'AYZ';
          expect(level1(input)).to.equal(expectedOutput);
      });
  
  
    });
  