describe('evaluateStudentScore', () => {
    it('should return "Invalid" when score is less than 0', () => {
      const result = evaluateStudentScore(-10);
      expect(result).toEqual('Invalid');
    });
  
    it('should return "Failed" when score is between 0 and 50', () => {
      const result = evaluateStudentScore(30);
      expect(result).toEqual('Failed');
    });
  
    it('should return "Passed" when score is between 50 and 65', () => {
      const result = evaluateStudentScore(60);
      expect(result).toEqual('Passed');
    });
  
    it('should return "Good" when score is between 65 and 75', () => {
      const result = evaluateStudentScore(70);
      expect(result).toEqual('Good');
    });
  
    it('should return "V.Good" when score is between 75 and 85', () => {
      const result = evaluateStudentScore(80);
      expect(result).toEqual('V.Good');
    });
  
    it('should return "Excellent" when score is between 85 and 100', () => {
      const result = evaluateStudentScore(90);
      expect(result).toEqual('Excellent');
    });
  
    it('should return "Invalid" when score is greater than or equal to 100', () => {
      const result = evaluateStudentScore(110);
      expect(result).toEqual('Invalid');
    });
  });
  