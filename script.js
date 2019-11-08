var paket;
$(document).ready(function(){
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    async: false,
    success: function(data){
      console.log(data);
      paket = data;
      }
  });
  var hoho = "ok";
  console.log(paket);
  
  for (var i=0; i<paket.length; i++){
    j=i-1;
    var awal = '<div class="col-md-3 card-wrapper"><div id="paket-'+i+'"><div class="card-title">'+paket[i]["nama"]+'</div><div class="card-price"><s>Rp.'+paket[i]["harga"]+'</s></div><div class="card-discprice">Rp.'+paket[i]["harga_diskon"]+'</div><div class="card-user">'+paket[i]["pengguna"]+' Pengguna Terdaftar</div><ul class="card-features">';
    for (j in paket[i]["fitur"]){
      awal = awal + '<li>'+paket[i]["fitur"][j]+'</li>';
    }
    var akhir = '</ul><div style="padding-top:1em;"><button class="btn btn-primary">Pilih Sekarang</button></div></div></div>';
    var element = awal + akhir;
    $('#paket').append(element);
  }
  
});