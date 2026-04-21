let chart1, chart2;

function loadChart(){

  let bulan = new Array(12).fill(0);
  let uang = new Array(12).fill(0);

  data.forEach(d=>{
    let t = new Date(d.tanggal);
    let b = t.getMonth();
    bulan[b] += d.jumlah;
    uang[b] += d.total;
  });

  let label = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

  if(chart1) chart1.destroy();
  if(chart2) chart2.destroy();

  chart1 = new Chart(document.getElementById("chart1"),{
    type:"bar",
    data:{labels:label,datasets:[{label:"Pengunjung",data:bulan}]}
  });

  chart2 = new Chart(document.getElementById("chart2"),{
    type:"line",
    data:{labels:label,datasets:[{label:"Pemasukan",data:uang}]}
  });
}

function goDashboard(){
  window.location.href = "dashboard.html";
}

loadChart();
