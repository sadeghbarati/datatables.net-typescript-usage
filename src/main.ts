import jQuery from 'jquery'


jQuery("#example").DataTable().columns.adjust();

jQuery("#example").DataTable().page('next').draw()

jQuery("#example").DataTable().ajax.json()

jQuery("#example").DataTable().ajax.reload()

jQuery("#example").DataTable().ajax.url()

jQuery("#example").DataTable().clear()

jQuery("#example").DataTable().data()

jQuery("#example").DataTable().destroy()

jQuery("#example").DataTable().draw()

jQuery("#example").DataTable().init()


jQuery('#example').DataTable({
  autoFill: true
});

jQuery('#example').DataTable({
  fixedColumns: true
});

jQuery('#example').DataTable({
  fixedHeader: true
});

jQuery('#example').DataTable({
  keyTable: true
});

jQuery('#example').DataTable({
  rowReorder: true
});

jQuery('#example').DataTable({
  rowReorder: true
});

jQuery('#example').DataTable({
  rowGroup: {
      dataSrc: 'group'
  }
});


jQuery('#example').DataTable({
  scroller: true
});

jQuery('#example').DataTable({
  searchBuilder:{
   
  },
});

jQuery('#example').DataTable({
  select: true
});

jQuery("#example").DataTable({
  responsive: true
}).responsive.recalc()
