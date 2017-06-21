(
    function () {
        'use strict';
        var products = [{
                id: "1",
                name: "iPhone7s",
                description: "Awesome Product",
                price: "$2000"
        },
            {
                id: "2",
                name: "onePlus3",
                description: "Awesome Product too",
                price: "$1000"
        }];

        $(document).ready(function () {
            bindToTable();
        });

        function bindToTable() {
            var productsTable = $("#tblProducts");
            //syntax for $.each

            //1st parameter is collection.
            //example products
            $.each(products, function (index, product) {
                console.log(index);
                var tr= buildTrTag(product);
                $(productsTable).append(tr);
            });
        }

        function buildTrTag(dataRow) {
            //Creates a tr tag
            var trTag = $("<tr/>");

            //passing data to build the td Tag
            var idColumn = buildTdTag(dataRow.id);
            var nameColumn = buildTdTag(dataRow.name);
            var descColumn = buildTdTag(dataRow.description);
            var priceColumn = buildTdTag(dataRow.price);
            $(trTag).addClass("success");
            $(trTag)
                .append(idColumn)
                .append(nameColumn)
                .append(descColumn)
                .append(priceColumn);

            // console.log($(trTag));
            return trTag;


        }

        function buildTdTag(dataForColumn) {
            //creates a td tag. 
            var tdTag = $("<td/>");

            //text("1")is a method that will add the text content
            //<td>1</td>
            $(tdTag).text(dataForColumn);

            return tdTag;

        }
    }
)();