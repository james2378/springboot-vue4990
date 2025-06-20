<template>
	<div class="addEdit-block" :style='{"minHeight":"100vh","padding":"30px","background":"url(http://codegen.caihongy.cn/20230401/18da3753d22a4199b5abc44dee037d48.png) fixed"}' style="width: 100%;">
		<el-form
			:style='{"padding":"20px","boxShadow":"0 0px 0px #ddd","borderRadius":"0px","background":"none"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'" label="老人编号" prop="laorenbianhao">
					<el-select :disabled="ro.laorenbianhao" @change="laorenbianhaoChange" v-model="ruleForm.laorenbianhao" placeholder="请选择老人编号">
						<el-option
							v-for="(item,index) in laorenbianhaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.laorenbianhao" label="老人编号" prop="laorenbianhao">
					<el-input v-model="ruleForm.laorenbianhao" placeholder="老人编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="老人姓名" prop="laorenxingming">
					<el-input v-model="ruleForm.laorenxingming" placeholder="老人姓名" clearable  :readonly="ro.laorenxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="老人姓名" prop="laorenxingming">
					<el-input v-model="ruleForm.laorenxingming" placeholder="老人姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="老人性别" prop="laorenxingbie">
					<el-input v-model="ruleForm.laorenxingbie" placeholder="老人性别" clearable  :readonly="ro.laorenxingbie"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="老人性别" prop="laorenxingbie">
					<el-input v-model="ruleForm.laorenxingbie" placeholder="老人性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="老人年龄" prop="laorennianling">
					<el-input v-model="ruleForm.laorennianling" placeholder="老人年龄" clearable  :readonly="ro.laorennianling"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="老人年龄" prop="laorennianling">
					<el-input v-model="ruleForm.laorennianling" placeholder="老人年龄" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="房间号" prop="fangjianhao">
					<el-input v-model="ruleForm.fangjianhao" placeholder="房间号" clearable  :readonly="ro.fangjianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="房间号" prop="fangjianhao">
					<el-input v-model="ruleForm.fangjianhao" placeholder="房间号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="床位号" prop="chuangweihao">
					<el-input v-model="ruleForm.chuangweihao" placeholder="床位号" clearable  :readonly="ro.chuangweihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="床位号" prop="chuangweihao">
					<el-input v-model="ruleForm.chuangweihao" placeholder="床位号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="体温" prop="tiwen">
					<el-input v-model="ruleForm.tiwen" placeholder="体温" clearable  :readonly="ro.tiwen"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="体温" prop="tiwen">
					<el-input v-model="ruleForm.tiwen" placeholder="体温" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="医护工号" prop="yihugonghao">
					<el-input v-model="ruleForm.yihugonghao" placeholder="医护工号" clearable  :readonly="ro.yihugonghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="医护工号" prop="yihugonghao">
					<el-input v-model="ruleForm.yihugonghao" placeholder="医护工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="医护姓名" prop="yihuxingming">
					<el-input v-model="ruleForm.yihuxingming" placeholder="医护姓名" clearable  :readonly="ro.yihuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="医护姓名" prop="yihuxingming">
					<el-input v-model="ruleForm.yihuxingming" placeholder="医护姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="健康状况" prop="jiankangzhuangkuang">
					<el-select :disabled="ro.jiankangzhuangkuang" v-model="ruleForm.jiankangzhuangkuang" placeholder="请选择健康状况" >
						<el-option
							v-for="(item,index) in jiankangzhuangkuangOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="健康状况" prop="jiankangzhuangkuang">
					<el-input v-model="ruleForm.jiankangzhuangkuang"
						placeholder="健康状况" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-if="type!='info'"  label="护理风险" prop="hulifengxian">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.hulifengxian" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else-if="ruleForm.hulifengxian" label="护理风险" prop="hulifengxian">
                    <span :style='{"fontSize":"16px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.hulifengxian"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"1px solid #badcdc","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"20px","background":"#deeeee","width":"128px","lineHeight":"44px","fontSize":"16px","height":"44px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"20px","background":"#eee","width":"128px","lineHeight":"44px","fontSize":"16px","height":"44px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"20px","background":"#eee","width":"128px","lineHeight":"44px","fontSize":"16px","height":"44px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				laorenbianhao : false,
				laorenxingming : false,
				laorenxingbie : false,
				laorennianling : false,
				fangjianhao : false,
				chuangweihao : false,
				tiwen : false,
				yihugonghao : false,
				yihuxingming : false,
				jiankangzhuangkuang : false,
				hulifengxian : false,
			},
			
			
			ruleForm: {
				laorenbianhao: '',
				laorenxingming: '',
				laorenxingbie: '',
				laorennianling: '',
				fangjianhao: '',
				chuangweihao: '',
				tiwen: '',
				yihugonghao: '',
				yihuxingming: '',
				jiankangzhuangkuang: '',
				hulifengxian: '',
			},
		
			laorenbianhaoOptions: [],
			jiankangzhuangkuangOptions: [],

			
			rules: {
				laorenbianhao: [
				],
				laorenxingming: [
				],
				laorenxingbie: [
				],
				laorennianling: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				fangjianhao: [
				],
				chuangweihao: [
				],
				tiwen: [
				],
				yihugonghao: [
				],
				yihuxingming: [
				],
				jiankangzhuangkuang: [
				],
				hulifengxian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='laorenbianhao'){
							this.ruleForm.laorenbianhao = obj[o];
							this.ro.laorenbianhao = true;
							continue;
						}
						if(o=='laorenxingming'){
							this.ruleForm.laorenxingming = obj[o];
							this.ro.laorenxingming = true;
							continue;
						}
						if(o=='laorenxingbie'){
							this.ruleForm.laorenxingbie = obj[o];
							this.ro.laorenxingbie = true;
							continue;
						}
						if(o=='laorennianling'){
							this.ruleForm.laorennianling = obj[o];
							this.ro.laorennianling = true;
							continue;
						}
						if(o=='fangjianhao'){
							this.ruleForm.fangjianhao = obj[o];
							this.ro.fangjianhao = true;
							continue;
						}
						if(o=='chuangweihao'){
							this.ruleForm.chuangweihao = obj[o];
							this.ro.chuangweihao = true;
							continue;
						}
						if(o=='tiwen'){
							this.ruleForm.tiwen = obj[o];
							this.ro.tiwen = true;
							continue;
						}
						if(o=='yihugonghao'){
							this.ruleForm.yihugonghao = obj[o];
							this.ro.yihugonghao = true;
							continue;
						}
						if(o=='yihuxingming'){
							this.ruleForm.yihuxingming = obj[o];
							this.ro.yihuxingming = true;
							continue;
						}
						if(o=='jiankangzhuangkuang'){
							this.ruleForm.jiankangzhuangkuang = obj[o];
							this.ro.jiankangzhuangkuang = true;
							continue;
						}
						if(o=='hulifengxian'){
							this.ruleForm.hulifengxian = obj[o];
							this.ro.hulifengxian = true;
							continue;
						}
				}
				











			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yihugonghao!=''&&json.yihugonghao) || json.yihugonghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yihugonghao = json.yihugonghao
						this.ro.yihugonghao = true;
					}
					if(((json.yihuxingming!=''&&json.yihuxingming) || json.yihuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yihuxingming = json.yihuxingming
						this.ro.yihuxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/laoren/laorenbianhao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.laorenbianhaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.jiankangzhuangkuangOptions = "良好,一般,较差".split(',')
			
		},
			// 下二随
			laorenbianhaoChange () {
				this.$http({
					url: `follow/laoren/laorenbianhao?columnValue=`+ this.ruleForm.laorenbianhao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.laorenxingming){
							this.ruleForm.laorenxingming = data.data.laorenxingming
						}
						if(data.data.laorenxingbie){
							this.ruleForm.laorenxingbie = data.data.laorenxingbie
						}
						if(data.data.laorennianling){
							this.ruleForm.laorennianling = data.data.laorennianling
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `hulifengxian/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.hulifengxian = this.ruleForm.hulifengxian.replace(reg,'../../../springboot35806/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "hulifengxian/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `hulifengxian/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.hulifengxianCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `hulifengxian/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.hulifengxianCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.hulifengxianCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 500;
	  	  width: 180px;
	  	  font-size: 16px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 20px;
	  	  padding: 0 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 16px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 20px;
	  	  padding: 0 10px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 20px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #ddd;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #ccc;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #ddd;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #ccc;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #ddd;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #ccc;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 20px;
	  	  padding: 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 16px;
	  	  min-height: 120px;
	  	  height: auto;
	  	}
</style>
