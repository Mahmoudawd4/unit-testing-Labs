describe('evaluateCarSpeed', () => {
    it('should return "Invalid" when speed is less than 0', () => {
      const result = evaluateCarSpeed(-10);
      expect(result).toEqual('Invalid');
    });
  
    it('should return "Low" when speed is between 0 and 40', () => {
      const result = evaluateCarSpeed(20);
      expect(result).toEqual('Low');
    });
  
    it('should return "Normal" when speed is between 40 and 120', () => {
      const result = evaluateCarSpeed(80);
      expect(result).toEqual('Normal');
    });
  
    it('should return "High" when speed is between 120 and 200', () => {
      const result = evaluateCarSpeed(150);
      expect(result).toEqual('High');
    });
  
    it('should return "V.High" when speed is between 200 and 220', () => {
      const result = evaluateCarSpeed(210);
      expect(result).toEqual('V.High');
    });
  
    it('should return "Invalid" when speed is greater than or equal to 220', () => {
      const result = evaluateCarSpeed(230);
      expect(result).toEqual('Invalid');
    });
  });
  