function tampilkanAlkitab() {
    const kalender = document.getElementById("kalender-alkitab");
    const tanggal = kalender.value;

    const projects = [
        { date: "2023-04-14", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-4.html" },
        { date: "2023-04-15", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-1.html" },
        { date: "2023-04-16", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-5.html" },
        { date: "2023-04-17", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-2.html" },
        { date: "2023-04-18", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-6.html" },
        { date: "2023-04-19", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-3.html" },
        { date: "2023-04-20", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-7.html" },
        { date: "2023-04-21", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-4.html" },
        { date: "2023-04-22", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-8.html" },
        { date: "2023-04-23", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-5.html" },
        { date: "2023-04-24", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-9.html" },
        { date: "2023-04-25", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-6.html" },
        { date: "2023-04-26", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-10.html" },
        { date: "2023-04-27", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-7.html" },
        { date: "2023-04-28", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-11.html" },
        { date: "2023-04-29", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-8.html" },
        { date: "2023-04-30", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-12.html" },
        { date: "2023-05-01", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-9.html" },
        { date: "2023-05-02", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-13.html" },
        { date: "2023-05-03", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-10.html" },
        { date: "2023-05-04", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-14.html" },
        { date: "2023-05-05", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-11.html" },
        { date: "2023-05-06", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-15.html" },
        { date: "2023-05-07", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-12.html" },
        { date: "2023-05-08", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-16.html" },
        { date: "2023-05-09", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-13.html" },
        { date: "2023-05-10", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-17.html" },
        { date: "2023-05-11", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-14.html" },
        { date: "2023-05-12", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-18.html" },
        { date: "2023-05-13", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-15.html" },
        { date: "2023-05-14", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-19.html" },
        { date: "2023-05-15", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-16.html" },
        { date: "2023-05-16", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-20.html" },
        { date: "2023-05-17", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-17.html" },
        { date: "2023-05-18", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-21.html" },
        { date: "2023-05-19", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-18.html" },
        { date: "2023-05-20", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-22.html" },
        { date: "2023-05-21", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-19.html" },
        { date: "2023-05-22", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-23.html" },
        { date: "2023-05-23", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-20.html" },
        { date: "2023-05-24", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-24.html" },
        { date: "2023-05-25", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yohanes/yohanes-21.html" },
        { date: "2023-05-26", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-25.html" },
        { date: "2023-05-27", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-1.html" },
        { date: "2023-05-28", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-26.html" },
        { date: "2023-05-29", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-2.html" },
        { date: "2023-05-30", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-27.html" },
        { date: "2023-05-31", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-3.html" },
        { date: "2023-06-01", fileName: "https://alkitab.katakombe.org/perjanjian-baru/kisah-para-rasul/kisah-para-rasul-28.html" },
        { date: "2023-06-02", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-4.html" },
        { date: "2023-06-03", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-5.html" },
        { date: "2023-06-04", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-6.html" },
        { date: "2023-06-05", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-7.html" },
        { date: "2023-06-06", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-8.html" },
        { date: "2023-06-07", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-9.html" },
        { date: "2023-06-08", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-10.html" },
        { date: "2023-06-09", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-11.html" },
        { date: "2023-06-10", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-12.html" },
        { date: "2023-06-11", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-13.html" },
        { date: "2023-06-12", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-14.html" },
        { date: "2023-06-13", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-15.html" },
        { date: "2023-06-14", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-16.html" },
        { date: "2023-06-15", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yakobus/yakobus-1.html" },
        { date: "2023-06-16", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-17.html" },
        { date: "2023-06-17", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yakobus/yakobus-2.html" },
        { date: "2023-06-18", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-18.html" },
        { date: "2023-06-19", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yakobus/yakobus-3.html" },
        { date: "2023-06-20", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-19.html" },
        { date: "2023-06-21", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yakobus/yakobus-4.html" },
        { date: "2023-06-22", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-20.html" },
        { date: "2023-06-23", fileName: "https://alkitab.katakombe.org/perjanjian-baru/yakobus/yakobus-5.html" },
        { date: "2023-06-24", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-21.html" },
        { date: "2023-06-25", fileName: "https://alkitab.katakombe.org/perjanjian-baru/titus/titus-1.html" },
        { date: "2023-06-26", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-22.html" },
        { date: "2023-06-27", fileName: "https://alkitab.katakombe.org/perjanjian-baru/titus/titus-2.html" },
        { date: "2023-06-28", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-23.html" },
        { date: "2023-06-29", fileName: "https://alkitab.katakombe.org/perjanjian-baru/titus/titus-3.html" },
        { date: "2023-06-30", fileName: "https://alkitab.katakombe.org/perjanjian-baru/lukas/lukas-24.html" },
        
        // injil yang sukses: yohanes, kisah para rasul, yakobus, titus, lukas
  
        //tambahkan proyek baru di sini sesuai dengan tanggalnya
    ];

    let url = "";
    for (const project of projects) {
      if (project.date === tanggal) {
        url = project.fileName;
        break;
      }
    }

    if (url === "") {
      document.getElementById("hasil-alkitab").innerHTML = "Tidak ada bacaan untuk tanggal yang dipilih";
    } else {
      document.getElementById("hasil-alkitab").innerHTML = `<iframe src="${url}" style="width:100%; height: 500px;"></iframe>`;
    }
  }