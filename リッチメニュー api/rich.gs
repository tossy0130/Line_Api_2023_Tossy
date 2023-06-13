const bot = new LineBotSdk.client(
  "1isyW5pQI5CXwliydHrfh+fHCcU63Z/KurLfPq66UeAu+ZLoGDWXDQeVFYByrcVJqO/MabwhENv4JsGB/S5zaJKTI8ablr/KpCU8D08k4uuPWyrT3haE1rdQ4n6jI8acumPdXjzkw2AIsdQy7a46+QdB04t89/1O/w1cDnyilFU="
);

//==============================================================================
//==============================================================================
//==============================================================================
// ================ 04 リッチメニュー　切り替えアクション付き
function createRichMenu_01() {
  let richmenu = bot.richmenu({
    name: "リッチメニュー",
    barText: "メニュー",
    size: { width: 2500, height: 1686 },
    selected: true,
    areas: [
      bot.area({
        x: 1250,
        y: 0,
        width: 1250,
        height: 350,
        action: bot.aSwitch({
          aliasId: "switch-to-b",
          data: "change to B",
          type: "richmenuswitch",
        }),
      }),
    ],
  });
  let res = bot.createRichMenu(richmenu);
  console.log(res.toString());
}

// === リッチメニュー 01
// richmenu-ef44820e362d276313108512a01ba5c0

// ================ リッチメニュー 02
function createRichMenu_02() {
  let richmenu = bot.richmenu({
    name: "リッチメニュー02",
    barText: "メニュー02",
    size: { width: 2500, height: 1686 },
    selected: true,
    areas: [
      bot.area({
        x: 0,
        y: 0,
        width: 1250,
        height: 350,
        action: bot.aSwitch({
          aliasId: "switch-to-a",
          data: "change to A",
          type: "richmenuswitch",
        }),
      }),
    ],
  });
  let res = bot.createRichMenu(richmenu);
  console.log(res.toString());
}

// === リッチメニュー 02
// richmenu-fb8af72c890ff91acb1ef3d75232e2fb

/*
・A 画像
1CmtTHXdQ0T9eMvK2wsamd_7B68SKqsOm

・B 画像 
1-e8YeS5YRSZwLKheGhMBEjQnCzPre6PN
*/

// ============== 01 リッチメニューアップロード
function uploadRichmenuImage_01() {
  const file = DriveApp.getFileById("1CmtTHXdQ0T9eMvK2wsamd_7B68SKqsOm");
  const blob = Utilities.newBlob(
    file.getBlob().getBytes(),
    file.getMimeType(),
    file.getName()
  );
  let res = bot.setRichMenuImage(
    "richmenu-ef44820e362d276313108512a01ba5c0",
    blob
  );
}

// =================== エイリアスを作成 01
function createRichMenuArias_01() {
  try {
    bot.createRichMenuArias(
      "switch-to-b",
      "richmenu-fb8af72c890ff91acb1ef3d75232e2fb"
    );
  } catch (e) {
    // 例外エラー処理
    Logger.log("Error:");
    Logger.log(e);
  }
}

// ==============  リッチメニューアップロード 02
function uploadRichmenuImage_02() {
  const file = DriveApp.getFileById("1-e8YeS5YRSZwLKheGhMBEjQnCzPre6PN");
  const blob = Utilities.newBlob(
    file.getBlob().getBytes(),
    file.getMimeType(),
    file.getName()
  );
  let res = bot.setRichMenuImage(
    "richmenu-fb8af72c890ff91acb1ef3d75232e2fb",
    blob
  );
}

// =================== エイリアスを作成 02
function createRichMenuArias_02() {
  try {
    bot.createRichMenuArias(
      "switch-to-a",
      "richmenu-ef44820e362d276313108512a01ba5c0"
    );
  } catch (e) {
    // 例外エラー処理
    Logger.log("Error:");
    Logger.log(e);
  }
}

// ================  リッチメニュー表示設定 01
function setDefaultRichMenu_01() {
  bot.setDefaultRichMenu("richmenu-ef44820e362d276313108512a01ba5c0");
}

// ================  リッチメニュー表示設定 02
function setDefaultRichMenu_02() {
  bot.setDefaultRichMenu("richmenu-fb8af72c890ff91acb1ef3d75232e2fb");
}

//==============================================================================
//==============================================================================
//==============================================================================

// ===================　エイリアスの削除
function deleteRichMenuArias() {
  bot.deleteRichMenuArias("switch-to-a");
  bot.deleteRichMenuArias("switch-to-b");
}

// =================== リッチメニュー削除
function deleteRichMenu() {
  bot.deleteRichMenu("richmenu-fcbcf6364ca601e9752dfe1792ca6d0d");
}

// ==================== リッチメニュー　確認
function getAllRichMenu() {
  let res = bot.getRichMenuList();
  let array = JSON.parse(res);
  console.log(array);
}

// ==================== 全てのリッチメニューを削除
function deleteAllRichMenu() {
  let res = bot.getRichMenuList();
  let array = JSON.parse(res);
  console.log(array);
  for (let i = 0; i < array.richmenus.length; i++) {
    bot.deleteRichMenu(array.richmenus[i]["richMenuId"]);
  }
}

// エイリアスの変更
function updateRichMenuArias_001() {
  bot.updateRichMenuArias(
    "switch-to-a",
    "richmenu-fb8af72c890ff91acb1ef3d75232e2fb"
  );
}

function updateRichMenuArias_002() {
  bot.updateRichMenuArias(
    "switch-to-b",
    "richmenu-ef44820e362d276313108512a01ba5c0"
  );
}
