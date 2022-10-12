function nhomtuoi(age) {
  if (age <= 0 || age > 130) {
    return 'Age is invalid';
  } else if (age < 16) {
    return 'Bạn ở độ tuổi vị thành niên';
  } else if (age >= 16 && age < 18) {
    return 'Bạn ở độ tuổi trưởng thành';
  } else {
    return 'Bạn đã già';
  }
}

console.log(nhomtuoi(0));
