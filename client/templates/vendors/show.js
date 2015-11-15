Template.vendorsShow.helpers ({
    vendorProducts: function(){
        return Products.find({"vendor.id": this.id});
    }
});