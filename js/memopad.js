// チェックイン
    $(".checkin").on("click", function () {
        // クリックされたらしたいことを記述
            // テスト
            // alert(1);
            $(".form-title01").text("（１）朝起きて、今どんなことを感じていますか？");
            $(".form-title02").text("（２）素敵な1日にするためにすることを3つあげてみましょう。");
            $(".form-title03").text("（３）今日1日を終えたあなたはどうなっていますか？");
        // クリックされたらしたいことを記述
    });
// チェックイン

// チェックアウト
    $(".checkout").on("click", function () {
        // クリックされたらしたいことを記述
            // テスト
            // alert(1);
            $(".form-title01").text("（１）今日1日を振り返り、今どんなことを感じていますか？");
            $(".form-title02").text("（２）良かったことや感謝したいことを3つあげてみましょう。");
            $(".form-title03").text("（３）明日を素敵な1日にするためにどんなことをしますか？");
        // クリックされたらしたいことを記述
    });
// チェックアウト

// 終了
$("#save").on("click", function () {
    // alert(1);
    const key = $("#key").val(); //入力されている文字を取得します
    // const memo = $("#memo").val();//入力されている文字を取得します
    const answer = $("#answer").val();//入力されている文字を取得します
    
    console.log(key, "id=keyの入力");
    // console.log(memo, "id=keyの入力");
    console.log(answer, "id=answerの入力");
    
  // ローカルストレージという保存場所にデータを登録します
    localStorage.setItem(key,answer);
    const html = `
      <tr>
        <th>
            ${key}
        </th>
        // <td>
        //     ${memo}
        // </td>
        <td>
            ${answer}
        </td>
      </tr>
  `;
  // 画面に表示
  $("#list").append(html);
//   // この下消さない
  });
// 終了

// 1「やってみよう！」の個別キーワード
    // $(".wellbeing11").on("click", function ()
    //     {
    //     // クリックする度に関数を起動
    //         // ランダムな数字をコンソールに出力
    //         const random = Math.floor( Math.random() *3+1); 
    //         console.log(random,"ランダム数字1~3");
    //         // ランダムな数字をコンソールに出力
    //         // ランダムな数字に応じて質問を表示
    //         if (random === 1) {
    //             console.log("A");
    //             $(".form-title11").text("（１）夢A");
    //             $(".form-title12").text("（２）夢A");
    //             $(".form-title13").text("（３）夢A");
    //         } else if (random === 2){
    //             console.log("B");
    //             $(".form-title11").text("（１）夢B");
    //             $(".form-title12").text("（２）夢B");
    //             $(".form-title13").text("（３）夢B");
    //         } else if (random === 3){
    //             console.log("C");
    //             $(".form-title11").text("（１）夢C");
    //             $(".form-title12").text("（２）夢C");
    //             $(".form-title13").text("（３）夢C");
    //         }
    //         // ランダムな数字に応じて質問を表示
    //     }
    // );

    $(".wellbeing11").on("click", function ()
        {
            // for文
            for (let i = 0 ; i < 1 ; i++){
                // ランダムな数字をコンソールに出力
                let random = Math.floor(Math.random() * 3) + 1;
                console.log(random);
                // ランダムな数字をコンソールに出力
                // ランダムな数字に応じて質問を表示
                if (random === 1) {
                    console.log("A");
                    $(".form-title11").text("（１）夢A");
                    $(".form-title12").text("（２）夢A");
                    $(".form-title13").text("（３）夢A");
                } else if (random === 2){
                    console.log("B");
                    $(".form-title11").text("（１）夢B");
                    $(".form-title12").text("（２）夢B");
                    $(".form-title13").text("（３）夢B");
                } else if (random === 3){
                    console.log("C");
                    $(".form-title11").text("（１）夢C");
                    $(".form-title12").text("（２）夢C");
                    $(".form-title13").text("（３）夢C");
                }
            // ランダムな数字に応じて質問を表示
              }
            // for文
        }
    );

    // 配列
    // const list11 = ['（１）夢A','（２）夢A','（２）夢A'];
    // const list12 = ['（１）夢B','（２）夢B','（２）夢B'];
    // const list13 = ['（１）夢C','（２）夢C','（２）夢C'];

    // const len = list11.length;
    // console.log((list11[1]));
    // console.log((list11.length));
    
    // // const len = list11.length;
    // // console.log((len,"ランダム数字1~3"));

    // // const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    // // console.log((weekdays[4])); //木曜を取得
    // // const len = weekdays.length;
    // // console.log((weekdays.length));
    

    $(".wellbeing12").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）目標A");
                $(".form-title12").text("（２）目標A");
                $(".form-title13").text("（３）目標A");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）目標B");
                $(".form-title12").text("（２）目標B");
                $(".form-title13").text("（３）目標B");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）目標C");
                $(".form-title12").text("（２）目標C");
                $(".form-title13").text("（３）目標C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing13").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）理想A");
                $(".form-title12").text("（２）理想A");
                $(".form-title13").text("（３）理想A");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）理想B");
                $(".form-title12").text("（２）理想B");
                $(".form-title13").text("（３）理想B");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）理想C");
                $(".form-title12").text("（２）理想C");
                $(".form-title13").text("（３）理想C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing14").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）強みA");
                $(".form-title12").text("（２）強みA");
                $(".form-title13").text("（３）強みA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）強みB");
                $(".form-title12").text("（２）強みB");
                $(".form-title13").text("（３）強みB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）強みC");
                $(".form-title12").text("（２）強みC");
                $(".form-title13").text("（３）強みC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing15").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）弱みA");
                $(".form-title12").text("（２）弱みA");
                $(".form-title13").text("（３）弱みA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）弱みB");
                $(".form-title12").text("（２）弱みB");
                $(".form-title13").text("（３）弱みB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）弱みC");
                $(".form-title12").text("（２）弱みC");
                $(".form-title13").text("（３）弱みC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing16").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）憧れA");
                $(".form-title12").text("（２）憧れA");
                $(".form-title13").text("（３）憧れA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）憧れB");
                $(".form-title12").text("（２）憧れB");
                $(".form-title13").text("（３）憧れB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）憧れC");
                $(".form-title12").text("（２）憧れC");
                $(".form-title13").text("（３）憧れC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing17").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）成長A");
                $(".form-title12").text("（２）成長A");
                $(".form-title13").text("（３）成長A");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）成長B");
                $(".form-title12").text("（２）成長B");
                $(".form-title13").text("（３）成長B");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）成長C");
                $(".form-title12").text("（２）成長C");
                $(".form-title13").text("（３）成長C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing18").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）学びA");
                $(".form-title12").text("（２）学びA");
                $(".form-title13").text("（３）学びA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）学びB");
                $(".form-title12").text("（２）学びB");
                $(".form-title13").text("（３）学びB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）学びC");
                $(".form-title12").text("（２）学びC");
                $(".form-title13").text("（３）学びC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing19").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）挫折A");
                $(".form-title12").text("（２）挫折A");
                $(".form-title13").text("（３）挫折A");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）挫折B");
                $(".form-title12").text("（２）挫折B");
                $(".form-title13").text("（３）挫折B");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）挫折C");
                $(".form-title12").text("（２）挫折C");
                $(".form-title13").text("（３）挫折C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing110").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）やりがいA");
                $(".form-title12").text("（２）やりがいA");
                $(".form-title13").text("（３）やりがいA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）やりがいB");
                $(".form-title12").text("（２）やりがいB");
                $(".form-title13").text("（３）やりがいB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）やりがいC");
                $(".form-title12").text("（２）やりがいC");
                $(".form-title13").text("（３）やりがいC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing111").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）ビジョンA");
                $(".form-title12").text("（２）ビジョンA");
                $(".form-title13").text("（３）ビジョンA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）ビジョンB");
                $(".form-title12").text("（２）ビジョンB");
                $(".form-title13").text("（３）ビジョンB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）ビジョンC");
                $(".form-title12").text("（２）ビジョンC");
                $(".form-title13").text("（３）ビジョンC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing112").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title11").text("（１）モチベーションA");
                $(".form-title12").text("（２）モチベーションA");
                $(".form-title13").text("（３）モチベーションA");
            } else if (random === 2){
                console.log("B");
                $(".form-title11").text("（１）モチベーションB");
                $(".form-title12").text("（２）モチベーションB");
                $(".form-title13").text("（３）モチベーションB");
            } else if (random === 3){
                console.log("C");
                $(".form-title11").text("（１）モチベーションC");
                $(".form-title12").text("（２）モチベーションC");
                $(".form-title13").text("（３）モチベーションC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
// 1「やってみよう！」の個別キーワード

// 2「ありがとう！」の個別キーワード
    $(".wellbeing21").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）親A");
                $(".form-title22").text("（２）親A");
                $(".form-title23").text("（３）親A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）親B");
                $(".form-title22").text("（２）親B");
                $(".form-title23").text("（３）親B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）親C");
                $(".form-title22").text("（２）親C");
                $(".form-title23").text("（３）親C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing22").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）兄弟A");
                $(".form-title22").text("（２）兄弟A");
                $(".form-title23").text("（３）兄弟A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）兄弟B");
                $(".form-title22").text("（２）兄弟B");
                $(".form-title23").text("（３）兄弟B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）兄弟C");
                $(".form-title22").text("（２）兄弟C");
                $(".form-title23").text("（３）兄弟C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing23").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）子供A");
                $(".form-title22").text("（２）子供A");
                $(".form-title23").text("（３）子供A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）子供B");
                $(".form-title22").text("（２）子供B");
                $(".form-title23").text("（３）子供B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）子供C");
                $(".form-title22").text("（２）子供C");
                $(".form-title23").text("（３）子供C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing24").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）友人A");
                $(".form-title22").text("（２）友人A");
                $(".form-title23").text("（３）友人A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）友人B");
                $(".form-title22").text("（２）友人B");
                $(".form-title23").text("（３）友人B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）友人C");
                $(".form-title22").text("（２）友人C");
                $(".form-title23").text("（３）友人C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing25").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）同僚A");
                $(".form-title22").text("（２）同僚A");
                $(".form-title23").text("（３）同僚A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）同僚B");
                $(".form-title22").text("（２）同僚B");
                $(".form-title23").text("（３）同僚B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）同僚C");
                $(".form-title22").text("（２）同僚C");
                $(".form-title23").text("（３）同僚C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing26").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）家庭A");
                $(".form-title22").text("（２）家庭A");
                $(".form-title23").text("（３）家庭A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）家庭B");
                $(".form-title22").text("（２）家庭B");
                $(".form-title23").text("（３）家庭B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）家庭C");
                $(".form-title22").text("（２）家庭C");
                $(".form-title23").text("（３）家庭C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing27").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）会社A");
                $(".form-title22").text("（２）会社A");
                $(".form-title23").text("（３）会社A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）会社B");
                $(".form-title22").text("（２）会社B");
                $(".form-title23").text("（３）会社B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）会社C");
                $(".form-title22").text("（２）会社C");
                $(".form-title23").text("（３）会社C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing28").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）嫉妬A");
                $(".form-title22").text("（２）嫉妬A");
                $(".form-title23").text("（３）嫉妬A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）嫉妬B");
                $(".form-title22").text("（２）嫉妬B");
                $(".form-title23").text("（３）嫉妬B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）嫉妬C");
                $(".form-title22").text("（２）嫉妬C");
                $(".form-title23").text("（３）嫉妬C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing29").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）信頼A");
                $(".form-title22").text("（２）信頼A");
                $(".form-title23").text("（３）信頼A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）信頼B");
                $(".form-title22").text("（２）信頼B");
                $(".form-title23").text("（３）信頼B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）信頼C");
                $(".form-title22").text("（２）信頼C");
                $(".form-title23").text("（３）信頼C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing210").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）孤独A");
                $(".form-title22").text("（２）孤独A");
                $(".form-title23").text("（３）孤独A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）孤独B");
                $(".form-title22").text("（２）孤独B");
                $(".form-title23").text("（３）孤独B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）孤独C");
                $(".form-title22").text("（２）孤独C");
                $(".form-title23").text("（３）孤独C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing211").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）居場所A");
                $(".form-title22").text("（２）居場所A");
                $(".form-title23").text("（３）居場所A");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）居場所B");
                $(".form-title22").text("（２）居場所B");
                $(".form-title23").text("（３）居場所B");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）居場所C");
                $(".form-title22").text("（２）居場所C");
                $(".form-title23").text("（３）居場所C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing212").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title21").text("（１）パートナーA");
                $(".form-title22").text("（２）パートナーA");
                $(".form-title23").text("（３）パートナーA");
            } else if (random === 2){
                console.log("B");
                $(".form-title21").text("（１）パートナーB");
                $(".form-title22").text("（２）パートナーB");
                $(".form-title23").text("（３）パートナーB");
            } else if (random === 3){
                console.log("C");
                $(".form-title21").text("（１）パートナーC");
                $(".form-title22").text("（２）パートナーC");
                $(".form-title23").text("（３）パートナーC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
// 2「ありがとう！」の個別キーワード

// 3「なんとかなる！」の個別キーワード
    $(".wellbeing31").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）不安A");
                $(".form-title32").text("（２）不安A");
                $(".form-title33").text("（３）不安A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）不安B");
                $(".form-title32").text("（２）不安B");
                $(".form-title33").text("（３）不安B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）　C");
                $(".form-title32").text("（２）　C");
                $(".form-title33").text("（３）　C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing32").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）緊張A");
                $(".form-title32").text("（２）緊張A");
                $(".form-title33").text("（３）緊張A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）緊張B");
                $(".form-title32").text("（２）緊張B");
                $(".form-title33").text("（３）緊張B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）緊張C");
                $(".form-title32").text("（２）緊張C");
                $(".form-title33").text("（３）緊張C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing33").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）失敗A");
                $(".form-title32").text("（２）失敗A");
                $(".form-title33").text("（３）失敗A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）失敗B");
                $(".form-title32").text("（２）失敗B");
                $(".form-title33").text("（３）失敗B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）失敗C");
                $(".form-title32").text("（２）失敗C");
                $(".form-title33").text("（３）失敗C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing34").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）恐れA");
                $(".form-title32").text("（２）恐れA");
                $(".form-title33").text("（３）恐れA");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）恐れB");
                $(".form-title32").text("（２）恐れB");
                $(".form-title33").text("（３）恐れB");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）恐れC");
                $(".form-title32").text("（２）恐れC");
                $(".form-title33").text("（３）恐れC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing35").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）リスクA");
                $(".form-title32").text("（２）リスクA");
                $(".form-title33").text("（３）リスクA");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）リスクB");
                $(".form-title32").text("（２）リスクB");
                $(".form-title33").text("（３）リスクB");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）リスクC");
                $(".form-title32").text("（２）リスクC");
                $(".form-title33").text("（３）リスクC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing36").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）落ち込みA");
                $(".form-title32").text("（２）落ち込みA");
                $(".form-title33").text("（３）落ち込みA");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）落ち込みB");
                $(".form-title32").text("（２）落ち込みB");
                $(".form-title33").text("（３）落ち込みB");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）落ち込みC");
                $(".form-title32").text("（２）落ち込みC");
                $(".form-title33").text("（３）落ち込みC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing37").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）トラウマA");
                $(".form-title32").text("（２）トラウマA");
                $(".form-title33").text("（３）トラウマA");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）トラウマB");
                $(".form-title32").text("（２）トラウマB");
                $(".form-title33").text("（３）トラウマB");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）トラウマC");
                $(".form-title32").text("（２）トラウマC");
                $(".form-title33").text("（３）トラウマC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing38").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）自己受容A");
                $(".form-title32").text("（２）自己受容A");
                $(".form-title33").text("（３）自己受容A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）自己受容B");
                $(".form-title32").text("（２）自己受容B");
                $(".form-title33").text("（３）自己受容B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）自己受容C");
                $(".form-title32").text("（２）自己受容C");
                $(".form-title33").text("（３）自己受容C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing39").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）過去の後悔A");
                $(".form-title32").text("（２）過去の後悔A");
                $(".form-title33").text("（３）過去の後悔A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）過去の後悔B");
                $(".form-title32").text("（２）過去の後悔B");
                $(".form-title33").text("（３）過去の後悔B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）過去の後悔C");
                $(".form-title32").text("（２）過去の後悔C");
                $(".form-title33").text("（３）過去の後悔C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing310").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）未来の不安A");
                $(".form-title32").text("（２）未来の不安A");
                $(".form-title33").text("（３）未来の不安A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）未来の不安B");
                $(".form-title32").text("（２）未来の不安B");
                $(".form-title33").text("（３）未来の不安B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）未来の不安C");
                $(".form-title32").text("（２）未来の不安C");
                $(".form-title33").text("（３）未来の不安C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing311").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）現在の課題A");
                $(".form-title32").text("（２）現在の課題A");
                $(".form-title33").text("（３）現在の課題A");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）現在の課題B");
                $(".form-title32").text("（２）現在の課題B");
                $(".form-title33").text("（３）現在の課題B");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）現在の課題C");
                $(".form-title32").text("（２）現在の課題C");
                $(".form-title33").text("（３）現在の課題C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing312").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title31").text("（１）プレッシャーA");
                $(".form-title32").text("（２）プレッシャーA");
                $(".form-title33").text("（３）プレッシャーA");
            } else if (random === 2){
                console.log("B");
                $(".form-title31").text("（１）プレッシャーB");
                $(".form-title32").text("（２）プレッシャーB");
                $(".form-title33").text("（３）プレッシャーB");
            } else if (random === 3){
                console.log("C");
                $(".form-title31").text("（１）プレッシャーC");
                $(".form-title32").text("（２）プレッシャーC");
                $(".form-title33").text("（３）プレッシャーC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
// 3「なんとかなる！」の個別キーワード

// 4「あなたらしく！」の個別キーワード
    $(".wellbeing41").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）軸A");
                $(".form-title42").text("（２）軸A");
                $(".form-title43").text("（３）軸A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）軸B");
                $(".form-title42").text("（２）軸B");
                $(".form-title43").text("（３）軸B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）軸C");
                $(".form-title42").text("（２）軸C");
                $(".form-title43").text("（３）軸C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing42").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）好きA");
                $(".form-title42").text("（２）好きA");
                $(".form-title43").text("（３）好きA");
            } else if (random == 2){
                console.log("B");
                $(".form-title41").text("（１）好きB");
                $(".form-title42").text("（２）好きB");
                $(".form-title43").text("（３）好きB");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）好きC");
                $(".form-title42").text("（２）好きC");
                $(".form-title43").text("（３）好きC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing43").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）幸せA");
                $(".form-title42").text("（２）幸せA");
                $(".form-title43").text("（３）幸せA");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）幸せB");
                $(".form-title42").text("（２）幸せB");
                $(".form-title43").text("（３）幸せB");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）幸せC");
                $(".form-title42").text("（２）幸せC");
                $(".form-title43").text("（３）幸せC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing44").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）個性A");
                $(".form-title42").text("（２）個性A");
                $(".form-title43").text("（３）個性A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）個性B");
                $(".form-title42").text("（２）個性B");
                $(".form-title43").text("（３）個性B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）個性C");
                $(".form-title42").text("（２）個性C");
                $(".form-title43").text("（３）個性C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing45").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）才能A");
                $(".form-title42").text("（２）才能A");
                $(".form-title43").text("（３）才能A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）才能B");
                $(".form-title42").text("（２）才能B");
                $(".form-title43").text("（３）才能B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）才能C");
                $(".form-title42").text("（２）才能C");
                $(".form-title43").text("（３）才能C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing46").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）安心A");
                $(".form-title42").text("（２）安心A");
                $(".form-title43").text("（３）安心A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）安心B");
                $(".form-title42").text("（２）安心B");
                $(".form-title43").text("（３）安心B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）安心C");
                $(".form-title42").text("（２）安心C");
                $(".form-title43").text("（３）安心C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing47").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）自立A");
                $(".form-title42").text("（２）自立A");
                $(".form-title43").text("（３）自立A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）自立B");
                $(".form-title42").text("（２）自立B");
                $(".form-title43").text("（３）自立B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）自立C");
                $(".form-title42").text("（２）自立C");
                $(".form-title43").text("（３）自立C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing48").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）環境A");
                $(".form-title42").text("（２）環境A");
                $(".form-title43").text("（３）環境A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）環境B");
                $(".form-title42").text("（２）環境B");
                $(".form-title43").text("（３）環境B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）環境C");
                $(".form-title42").text("（２）環境C");
                $(".form-title43").text("（３）環境C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing49").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）自信A");
                $(".form-title42").text("（２）自信A");
                $(".form-title43").text("（３）自信A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）自信B");
                $(".form-title42").text("（２）自信B");
                $(".form-title43").text("（３）自信B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）自信C");
                $(".form-title42").text("（２）自信C");
                $(".form-title43").text("（３）自信C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing410").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）信念A");
                $(".form-title42").text("（２）信念A");
                $(".form-title43").text("（３）信念A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）信念B");
                $(".form-title42").text("（２）信念B");
                $(".form-title43").text("（３）信念B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）信念C");
                $(".form-title42").text("（２）信念C");
                $(".form-title43").text("（３）信念C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing411").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）価値観A");
                $(".form-title42").text("（２）価値観A");
                $(".form-title43").text("（３）価値観A");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）価値観B");
                $(".form-title42").text("（２）価値観B");
                $(".form-title43").text("（３）価値観B");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）価値観C");
                $(".form-title42").text("（２）価値観C");
                $(".form-title43").text("（３）価値観C");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
    $(".wellbeing412").on("click", function ()
        {
        // クリックする度に関数を起動
            // ランダムな数字をコンソールに出力
            const random = Math.floor( Math.random() *3+1); 
            console.log(random,"ランダム数字1~3");
            // ランダムな数字をコンソールに出力
            // ランダムな数字に応じて質問を表示
            if (random === 1) {
                console.log("A");
                $(".form-title41").text("（１）セルフイメージA");
                $(".form-title42").text("（２）セルフイメージA");
                $(".form-title43").text("（３）セルフイメージA");
            } else if (random === 2){
                console.log("B");
                $(".form-title41").text("（１）セルフイメージB");
                $(".form-title42").text("（２）セルフイメージB");
                $(".form-title43").text("（３）セルフイメージB");
            } else if (random === 3){
                console.log("C");
                $(".form-title41").text("（１）セルフイメージC");
                $(".form-title42").text("（２）セルフイメージC");
                $(".form-title43").text("（３）セルフイメージC");
            }
            // ランダムな数字に応じて質問を表示
        }
    );
// 4「あなたらしく！」の個別キーワード