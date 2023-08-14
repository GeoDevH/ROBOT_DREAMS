const {
    calculateSum,
    findMinMax,
    checkNumbers,
    generateSymbolHash,
    Accumulator,
    CancelableAccumulator,
    applyZoom,
    addZoomAnimation,
    removeZoomAnimation,
    zoomClick
} = require('./app');
  
describe('calculateSum function', function() {
  test('calculates sum of an array', function() {
    const array = [5, 10, 15, 20];
    expect(calculateSum(array)).toBe(50);
  });
});

describe('findMinMax function', function() {
  test('finds min and max in an array', function() {
    const array = [5, 10, 3, 20, 8];
    expect(findMinMax(array)).toEqual({ min: 3, max: 20 });
  });
});

describe('checkNumbers function', function() {
  test('checking if the data is a number', function() {
    const array = [5, 'word', 10, 'string', 55, 'element', 132, 'java', 9, true];
    expect(checkNumbers(array)).toEqual([5, 10, 55, 132, 9]);
  });
});

describe('generateHash function', function() {
  test('checking whether lines with a hash will be output gradually', function() {
    const rows = 5;
    const symbolHash = ['#', '##', '###', '####', '#####'];
    expect(generateSymbolHash(rows)).toEqual(symbolHash);
  });
});

describe('Accumulator', function() {
let accumulator;

beforeEach(function() {
  accumulator = new Accumulator();
});

test('digit increment', function() {
  accumulator.digit_increment();
  expect(accumulator.getDigit()).toBe(1);
});

test('digit decrement', function() {
  accumulator.digit_decrement();
  expect(accumulator.getDigit()).toBe(-1);
});
});

describe('CancelableAccumulator', function() {
  let cancelableAccumulator;

  beforeEach(function() {
    cancelableAccumulator = new CancelableAccumulator();
  });

  test('increment and decrement', function() {
    cancelableAccumulator.digit_increment();
    expect(cancelableAccumulator.getDigit()).toBe(1);

    cancelableAccumulator.digit_decrement();
    expect(cancelableAccumulator.getDigit()).toBe(0);
  });

  test('clear', function() {
    cancelableAccumulator.digit_increment();
    cancelableAccumulator.clear();
    expect(cancelableAccumulator.getDigit()).toBe(0);
  });

  test('initial digit', function() {
    cancelableAccumulator = new CancelableAccumulator(5);
    expect(cancelableAccumulator.getDigit()).toBe(5);
  });
});

describe('applyZoom function', function() {
  it('should apply zoom with given scale', function() {
    const photo = document.createElement('div');
    applyZoom(photo, 1.5);
    expect(photo.style.transform).toBe('scale(1.5)');
  });
});

describe('addZoomAnimation function', function() {
  it('should add animation_zoom class', function() {
    const photo = document.createElement('div');
    addZoomAnimation(photo);
    expect(photo.classList.contains('animation_zoom')).toBe(true);
  });
});

describe('removeZoomAnimation function', function() {
  it('should remove animation_zoom class', function() {
    const photo = document.createElement('div');
    photo.classList.add('animation_zoom');
    removeZoomAnimation(photo);
    expect(photo.classList.contains('animation_zoom')).toBe(false);
  });
});

describe('zoomClick function', function() {
  it('should toggle zoom effect on click', function() {
    const photo = document.createElement('div');
    photo.classList.add('zoom_photo');
    photo.classList.add('gallery_photo_zoom');
    document.body.appendChild(photo);

    zoomClick(photo);
    expect(photo.style.transform).toBe('scale(1.5)');
    expect(photo.classList.contains('animation_zoom')).toBe(true);

    zoomClick(photo);
    expect(photo.style.transform).toBe('scale(1)');
    expect(photo.classList.contains('animation_zoom')).toBe(false);
  });
});