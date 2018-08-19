dataAy = {

    ini:function () {
        let app = angular.module("dataAy",[])

        app.controller('dataAyChart',function ($scope) {
            $scope.labels=["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
            $scope.datasets=[{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1
            }]
        })

        app.directive("chart",function () {
            return{
                restrict:"E",
                template:"<div class=\"chart-container\" style=\"position: relative;\">\n" +
                    "    <canvas style=\"position: relative;height:0; width:0\"></canvas>\n" +
                    "</div>",
                controller:"dataAyChart",
                link:function (scope,element,attr) {
                    let chartEle = element['0']
                    let chartContainer = chartEle.getElementsByClassName("chart-container")[0]
                    chartContainer.style.width=window.getComputedStyle(chartEle).width
                    chartContainer.style.height=window.getComputedStyle(chartEle).height
                    let canvasEle = chartContainer.getElementsByTagName("canvas")[0]
                    let ctx = canvasEle.getContext('2d');
                    let type = attr['chartType'] || 'line'
                    console.log(type)
                    let chartData={
                        type: type,
                        data:{
                            labels:scope.labels,
                            datasets:scope.datasets
                        }
                    }
                    new Chart(ctx,chartData)
                }
            }
        })


    }

}