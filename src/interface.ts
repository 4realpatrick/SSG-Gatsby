export interface IDimension {
  DimensionId: string; // 维度标识
  DimensionName: string; // 维度名字
  DimensionShowOrder: number; // 维度顺序
  isDefault: boolean; // 是否默认维度，是的话，默认选中且不可编辑
  alias?: string; // 别名
}

export interface IUnit {
  UnitId: string; // 分组标识
  UnitName: string; // 分组名称
  UnitShowOrder: number; // 分组的顺序
  DimensionList: IDimension[]; // 分组下的维度
}

export interface IDataResponse {
  selectedData: IUnit[]; // 表格中已经存在的数据
  dataSource: IUnit[]; // 全部的数据
}
