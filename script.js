const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('section');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // حذف کلاس active از همه دکمه‌ها و بخش‌ها
        buttons.forEach(b => b.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        // افزودن کلاس active به دکمه و بخش انتخاب شده
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
      });
    });