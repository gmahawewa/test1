    test('#isNull, #isNotNull', function () {
      assert.isNull.fail(null, 'This is an optional error description - e.g. null is null');

      assert.isNotNull.fail(1, '1 is not null');
    });
