document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    // 业务常用部分
    const businessSection = `
        <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-2"></i> <b><font color="blue">★业务常用★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tgjt.kdcloud.com/" target="_blank" data-id="201" class="card no-c  mb-4 site-725" data-toggle="tooltip" data-placement="bottom" title="ERP"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/jindie.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>金蝶云星瀚</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs"> ERP </p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://oa.shanghaidelongsteel.com/" target="_blank" data-id="202" class="card no-c  mb-4 site-725" data-toggle="tooltip" data-placement="bottom" title="集团OA"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/fanwei.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>泛微OA</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">集团OA</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://admin.yzc.dingdangmro.com/login#/home" target="_blank" data-id="228" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="叮当后台管理系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/dingdang.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>叮当后台管理系统</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">叮当后台管理系统</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://admin.yun-zhaocai.cn/login#/home" target="_blank" data-id="203" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="云招采后台管理系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/yzcht.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>云招采-后台管理</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">云招采后台管理系统</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.yun-zhaocai.cn/System/index" target="_blank" data-id="204" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="云招采平台-供应商端"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/yzcht.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>云招采-供应商端</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">云招采平台-供应商端</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://169.85.160.83/" target="_blank" data-id="205" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="原ERP系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/nc2.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>NC系统</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">原ERP系统</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.kdocs.cn/latest" target="_blank" data-id="206" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="一起办公才高效"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/jinshan.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>金山文档</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">一起办公才高效</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://bjtime.cn/riqi/" target="_blank" data-id="207" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="自然日计算"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/riqi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>日期计算器</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">自然日计算</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.fynas.com/workday/due" target="_blank" data-id="208" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="工作日计算"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gongzuori.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>工作日计算器</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">工作日计算</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://docs.qq.com/form/page/DREFnYWdkQmlIaFli?_t=1641374922792#/fill" target="_blank" data-id="209" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="统计表"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tengxun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>合同章使用登记表</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">统计表</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://60.6.250.6:8090" target="_blank" data-id="210" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="用印章系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qianshu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>电子签署平台</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">用印章系统</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://c.zcwz.com/" target="_blank" data-id="211" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="轴承型号查询大全、新旧型号对照"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zhoucheng.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>轴承型号查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">轴承型号查询大全、新旧型号对照</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://s.1688.com/selloffer/offer_search.html" target="_blank" data-id="212" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="批发、供应"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/1688.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>1688</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">批发、供应</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.doc88.com/" target="_blank" data-id="213" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="在线文档分享平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/daokebaba.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>道客巴巴</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线文档分享平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.antpedia.com/standard/" target="_blank" data-id="214" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="查询强制性国家标准在用状态"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/biaozhun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>国家标准查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">查询强制性国家标准在用状态</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://openstd.samr.gov.cn/bzgk/gb/index" target="_blank" data-id="215" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="国家标准全文公开系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gongkai.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>国家标准全文公开</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">国家标准全文公开系统</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.gsxt.gov.cn/index.html" target="_blank" data-id="216" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="国家企业信用信息公示系统"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gongshi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>国家企业信用信息公示系统</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">供应商查询平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.tianyancha.com/" target="_blank" data-id="217" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="供应商查询平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tianyancha.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>天眼查</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">供应商查询平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.qcc.com/" target="_blank" data-id="218" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="供应商查询平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qcc.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>企查查</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">供应商查询平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.qixin.com/" target="_blank" data-id="225" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="企业查询_企业信用信息平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qxin.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>启信宝</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">供应商查询平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div>
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.camscanner.com/file/recent" target="_blank" data-id="219" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="扫描全能王网页版"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/smqnw.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>扫描全能王</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">扫描全能王网页版</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://sbj.cnipa.gov.cn/sbj/index.html" target="_blank" data-id="220" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="中国商标网"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/shangbiao.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>商标综合查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">中国商标网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.patentguru.com/affiliate/39972" target="_blank" data-id="221" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="创新者都在用的专利研发平台-专利检索-专利深度分析跟踪平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zhuanli.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>专利顾如</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">创新者都在用的专利研发平台-专利检索-专利深度分析跟踪平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.bzfxw.com/" target="_blank" data-id="222" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="原标准分享网_专注工程技术学习网站_论文资料标准分享网"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/xuetutu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>学兔兔</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网站主要提供国家标准,行业标准规范下载,机械,建筑,石油,化工,电力等行业的图纸、模型及相关的论文技术资料标准分享网站!</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://169.85.160.141:9094/" target="_blank" data-id="223" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="注意事项：1.入厂方式：借道车辆—只针对于金牛、顺如；外访车辆—针对所有不制卡、未录入门禁车辆；2.借道车辆需选择进出门岗，其他外访车辆不限制门岗；3.车辆排放标准蓝牌车不限制，黄牌车需国五以上；4.可以提前预提交，生效日期为车辆可以进厂出厂的日期；5.车辆一天跑多次，可以一次提交多条；6.车辆管控范围为货运车辆，包含蓝牌拉货的皮卡、双排车辆；"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ttzhglxt.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>天津铁厂综合管理系统</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">内网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://zhcx.tiantie.com:13335" target="_blank" data-id="224" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="注意事项：1.入厂方式：借道车辆—只针对于金牛、顺如；外访车辆—针对所有不制卡、未录入门禁车辆；2.借道车辆需选择进出门岗，其他外访车辆不限制门岗；3.车辆排放标准蓝牌车不限制，黄牌车需国五以上；4.可以提前预提交，生效日期为车辆可以进厂出厂的日期；5.车辆一天跑多次，可以一次提交多条；6.车辆管控范围为货运车辆，包含蓝牌拉货的皮卡、双排车辆；"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ttzhglxt.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>天津铁厂综合管理系统</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">外网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="fm/index.html" target="_blank" data-id="225" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="阀门型号编制方法GBT32808-2016"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/GB.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>阀门型号编制方法</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">GBT32808-2016</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://szfilehelper.weixin.qq.com/" target="_blank" data-id="226" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="微信文件传输助手网页版"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wx.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>文件传输助手</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网页版传输助手</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/index.html" target="_blank" data-id="227" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="强制性产品认证专栏"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gongshi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>强制性产品认证专栏</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">国家认证认可监督管理委员会</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://wenshu.court.gov.cn/" target="_blank" data-id="224" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="2016年10月1日，《最高人民法院关于人民法院在互联网公布裁判文书的规定》正式实施。"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wenshu32.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>中国裁判文书网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">中国裁判文书网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div>
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.obei.com.cn/" target="_blank" data-id="225" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="依托宝武集团优选供应商，连接数十万家客户,志在满足企业一切核心采购需求。"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/obei.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>欧贝商城</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">工业品供应链生态平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div>
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://qy.dingdangmro.com/workplace" target="_blank" data-id="226" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="叮当验厂资料"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/dingdang1.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>叮当供应商列表</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">叮当验厂资料</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div>
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-3"></i> <b><font color="red">★常用推荐★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.52pojie.cn/" target="_blank" data-id="301" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="软件安全与病毒分析前沿，丰富的技术版块"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/52pojie.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>吾爱破解</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">软件安全与病毒分析前沿，丰富的技术版块</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://bbs.pcbeta.com/" target="_blank" data-id="302" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="微软极客社区"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/yuanjing.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>远景论坛</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">微软极客社区</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://club.excelhome.net" target="_blank" data-id="303" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="Excel教程免费学习，Excel表格交流，下载Excel函数VBA技巧培训"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/excelhome.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>ExcelHome</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">Excel教程免费学习，Excel表格交流，下载Excel函数VBA技巧培训</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.pjbrj.com/" target="_blank" data-id="304" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="视窗软件站"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/pojieba.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>破解吧</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">视窗软件站</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.mefcl.com/" target="_blank" data-id="305" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="分享纯净好软件"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/mefcl.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>mefcl</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">分享纯净好软件</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.zxcs.info/" target="_blank" data-id="307" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="完本精校小说"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/yunketang.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>知轩藏书</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">完本精校小说</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.csdn.net/" target="_blank" data-id="605" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="专业开发社区"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/csdn.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>CSDN</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">专业开发社区</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.chaoxb.com/" target="_blank" data-id="312" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="实时查询全国港口潮汐情况"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/chaoxb.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>潮汐表网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">最专业的潮汐在线查询</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mp.weixin.qq.com/s?__biz=MzA4MjU4MTg2Ng==&amp;mid=2247528944&amp;idx=1&amp;sn=2754185cbc7aa5feca9d44c3e3581894&amp;scene=19#wechat_redirect" target="_blank" data-id="308" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="23年4月Win版"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wx.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>软件目录</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">23年4月Win版</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://crskybbs.org/" target="_blank" data-id="309" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="老论坛"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/feifan.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>霏凡论坛</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">老论坛</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://waifu2x.udp.jp/" target="_blank" data-id="310" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="ico转png(2x)"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/waifu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>waifu2x</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">ico转png(2x)</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://basic.smartedu.cn/" target="_blank" data-id="311" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="国家中小学智慧教育平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gjzxx.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>国家中小学智慧教育平台</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">国家智慧教育公共服务平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://bizhi1.com/" target="_blank" data-id="313" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="精彩，从这里开始"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/jijian.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>极简壁纸</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">海量超高清壁纸无水印下载</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://young.hao.360.com/" target="_blank" data-id="314" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="360导航少年版，让家长放心，对孩子有用，为青少年提供常用网址、有趣的知识问答、有营养的视频、适合孩子的书单、影视节目等丰富且适合青少年的内容服务，搭建健康的青少年网络环境，让孩子的上网变得安全、简单。孩子上网，从360导航少年版开始。"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/360.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>360导航少年版</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">让家长放心，对孩子有用。</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.znds.com/" target="_blank" data-id="315" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="ZNDS智能电视网是中国知名的智能电视论坛,关注智能电视,智能电视盒,安卓电视,安卓TV,安卓机顶盒论坛,智能电视软件下载,Android智能电视机,智能电视游戏。安卓智能电视TV应用市场,TV OS Rom,刷机教程,安卓TV软件下载,Android电视软件商店,智能电视APP应用分享和交流。"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/znds.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>智能电视网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">ZNDS,智能电视网,智能电视论坛,智能电视</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.right.com.cn/forum/forum.php" target="_blank" data-id="316" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="无线论坛,无线路由器论坛,openwrt论坛,x86软路由论坛,小米无线路由器论坛,wifi6论坛"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/right.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>恩山无线论坛</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">无线路由器爱好者的乐园</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.tiangong.cn/" target="_blank" data-id="317" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="搜索、聊天、写作、速读、画画的全能AI助手"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tiangong.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>天工AI</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">AI助手</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://bbs.wuyou.net/forum.php" target="_blank" data-id="318" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="论坛 ,无忧启动论坛"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wuyou.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>无忧论坛</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">无忧启动论坛</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tongyi.aliyun.com/qianwen" target="_blank" data-id="319" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="通义，LLM，语言大模型，阿里巴巴大模型，达摩院，文生文，自然语言处理"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tongyi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>通义</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">阿里，通情，达义。</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.deepseek.com/" target="_blank" data-id="320" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="深度求索, AGI, 人工智能底层模型, 开源模型, LLM, DeepSeek, DeepSeek Coder, DeepSeek Chat, DeepSeek Platform"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/deepseek.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>DeepSeek</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">深度求索</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-41"></i> <b><font color="green">★影视推荐★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.bilibili.com/" target="_blank" data-id="4101" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="视频弹幕网站，及时的动漫新番，活跃的ACG氛围"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/bilibili.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>哔哩哔哩</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">视频弹幕网站，及时的动漫新番，活跃的ACG氛围</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.libvio.me/" target="_blank" data-id="4102" class="card no-c  mb-4 site-725" data-toggle="tooltip" data-placement="bottom" title="超清在线视频"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/libvio.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>LIBVIO</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs"> 超清在线视频 </p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://55x35.art/" target="_blank" data-id="4108" class="card no-c  mb-4 site-360" data-toggle="tooltip" data-placement="bottom" title="在线播放最新热门电影,独播点播电视剧"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/555dianying.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>555电影</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线播放最新热门电影,独播点播电视剧</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.xunbody.com/" target="_blank" data-id="4110" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="迅雷影视"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/xb.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>迅播影院</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">迅雷影视</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tv.cctv.com/live/index.shtml" target="_blank" data-id="4111" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="CCTV节目官网_央视网"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/cctv.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>CCTV直播</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">CCTV节目官网_央视网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.douyin.com/" target="_blank" data-id="4112" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="直播平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/douyin.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>抖音网页版</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">直播平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.kuaishou.com/" target="_blank" data-id="4113" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="直播平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/kuaishou.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>快手网页版</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">直播平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.huya.com/" target="_blank" data-id="4114" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="直播平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/huya.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>虎牙直播</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">直播平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.douyu.com/" target="_blank" data-id="4115" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="直播平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/douyu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>斗鱼直播</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">直播平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://music.163.com/" target="_blank" data-id="4116" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="在线音乐"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wyy163.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>网易云音乐</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线音乐</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://y.qq.com/" target="_blank" data-id="4117" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="在线音乐"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qqyinyue.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>QQ音乐</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线音乐</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.kugou.com/" target="_blank" data-id="4118" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="在线音乐"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/kugou.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>酷狗音乐</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线音乐</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-5"></i> <b><font color="orange">★网络存储★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.aliyundrive.com/" target="_blank" data-id="504" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/aliyunpan.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>阿里云盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网络存储-网盘</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
       
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://pan.baidu.com/disk/main" target="_blank" data-id="505" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/baiduyunpan.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>百度网盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网络存储-网盘</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.lanzou.com/" target="_blank" data-id="506" class="card no-c  mb-4 site-424" data-toggle="tooltip" data-placement="bottom" title="百兆以内不限量不限速"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/lanzou.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>蓝奏云</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">百兆以内不限量不限速</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.123pan.com/" target="_blank" data-id="518" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/123yunpan.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>123云盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">下载不限速</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://pan.xunlei.com/" target="_blank" data-id="507" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/xunleiyun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>迅雷云盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网络存储-网盘</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://onedrive.live.com/" target="_blank" data-id="508" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="微软"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/onedrive.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>OneDrive</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">微软</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://cloud.189.cn/" target="_blank" data-id="509" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tianyi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>天翼云盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网络存储-网盘</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.yun.cn/" target="_blank" data-id="510" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网络存储-网盘"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/uc.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>UC网盘</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网络存储-网盘</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      </div>
      
      <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-9"></i> <b><font color="red">★邮箱★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.qq.com/" target="_blank" data-id="511" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="腾讯邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qqmail.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>QQ邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">腾讯邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.126.com/" target="_blank" data-id="513" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网易126邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wangyi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>网易126邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网易126邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.163.com/" target="_blank" data-id="514" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="网易163邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wangyi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>网易163邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">网易163邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://outlook.live.com/mail/" target="_blank" data-id="515" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="微软邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/hotmail.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>Hotmail</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">微软邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.sina.com.cn/" target="_blank" data-id="516" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="新浪邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/sina.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>新浪邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">新浪邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.aliyun.com/" target="_blank" data-id="517" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="阿里邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/alimail.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>阿里邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">阿里邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://mail.google.com/" target="_blank" data-id="512" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="谷歌邮箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gmail.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>Gmail邮箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">谷歌邮箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-7"></i> <b><font color="blue">★工具★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://icp.chinaz.com/" target="_blank" data-id="703" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="ICP备案查询"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/icp.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>ICP备案查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">ICP备案查询</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tool.oschina.net/codeformat/html/" target="_blank" data-id="704" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="在线代码格式化"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/geshi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>在线代码格式化</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">在线代码格式化</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://c.runoob.com/front-end/61/" target="_blank" data-id="705" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="HTML/CSS/JS在线工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zaixian.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>HTML在线运行</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">HTML/CSS/JS在线工具</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.ip138.com/" target="_blank" data-id="706" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="IP地址、邮编查询"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ip.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>IP地址查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">IP地址、邮编查询</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://hiregex.com/" target="_blank" data-id="707" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="正则表达式在线测试与调试工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/haizhengze.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>嗨正则</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">支持JS,PHP,Python,Golang,PCRE</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tool.oschina.net/regex/" target="_blank" data-id="708" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="OSCHINA"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/geshi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>在线正则表达式测试</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">OSCHINA</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/" target="_blank" data-id="709" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="selenium浏览器驱动"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wr.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>浏览器驱动</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">selenium浏览器驱动</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://googlechromelabs.github.io/chrome-for-testing/#stable" target="_blank" data-id="718" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="谷歌浏览器及驱动"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/google.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>谷歌浏览器及驱动</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">谷歌浏览器及驱动</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.autoahk.com/" target="_blank" data-id="710" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="让电脑更懂你！"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ahk.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>AutoHotkey</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">让电脑更懂你！</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://aigcfun.com/" target="_blank" data-id="711" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="ChatGPT"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/aigpt.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>aigcfun ChatGPT</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">国内可用ChatGPT</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://ppt.sankki.com/#/works" target="_blank" data-id="712" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="闪击PPT"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ppt.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>闪击PPT</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">PPT模板</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.gjw123.com/" target="_blank" data-id="713" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="全网第一家全在线、免下载工具网站"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gj3.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>在线工具</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">全网第一家全在线、免下载工具网站</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tool.lu/" target="_blank" data-id="714" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="你的工具箱"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gj1.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>在线工具</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">你的工具箱</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.atoolbox.net/" target="_blank" data-id="715" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="好用的在线工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gj2.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>一个工具箱</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">好用的在线工具</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.examcoo.com/" target="_blank" data-id="716" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="永久免费的电子作业与在线考试系统云平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/kaoshi.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>考试酷(examcoo)</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">永久免费的电子作业与在线考试系统云平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tool.chinaz.com/" target="_blank" data-id="717" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="站长之家"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/icp.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>站长工具</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">站长之家</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-8"></i> <b><font color="red">★素材资源★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.iconfont.cn/" target="_blank" data-id="801" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="阿里巴巴矢量图标库"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/albb.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>阿里图标</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">阿里巴巴矢量图标库</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.logosc.cn/logo/monogram" target="_blank" data-id="802" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="文字图标在线工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wztb.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>文字图标</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">文字图标在线工具</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.58pic.com/" target="_blank" data-id="803" class="card no-c  mb-4 site-424" data-toggle="tooltip" data-placement="bottom" title="专注正版图片设计素材，拥有800多万张素材"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qiantu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>千图网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">专注正版图片设计素材，拥有800多万张素材</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://588ku.com/" target="_blank" data-id="804" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="免费png图片背景素材下载"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/qk.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>千库网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">免费png图片背景素材下载</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://huaban.com/" target="_blank" data-id="805" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="陪你做生活的设计师"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/huaban.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>花瓣网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">陪你做生活的设计师</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.ooopic.com/" target="_blank" data-id="806" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="正版高清图片素材网站"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/wotu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>我图网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">正版高清图片素材网站</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.nipic.com/" target="_blank" data-id="807" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="原创素材共享平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/nitu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>昵图网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">原创素材共享平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.lanrentuku.com/" target="_blank" data-id="808" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="矢量图,JS代码,网页素材,游戏,软件"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/lanren.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>懒人图库</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">矢量图,JS代码,网页素材,游戏,软件</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.sccnn.com/" target="_blank" data-id="809" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="素材CNN_素材共享平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/sczg.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>素材中国</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">素材CNN_素材共享平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.officeplus.cn/" target="_blank" data-id="810" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="微软Oice官方在线模板网站！"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/officeplus.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>OfficePLUS</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">微软Oice官方在线模板网站！</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.ypppt.com/" target="_blank" data-id="811" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="PPT模板免费下载_精美免费PPT模板下载"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ypppt.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>优品PPT</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">PPT模板免费下载_精美免费PPT模板下载</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.500d.me/" target="_blank" data-id="812" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="个人简历，简历模板，个人简历模板"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/500d.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>五百丁</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">个人简历，简历模板，个人简历模板</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.woodo.cn/home/" target="_blank" data-id="813" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="PPT在线制作，协作工具，演示文稿，PPT模板下载"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/woodo.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>吾道</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">PPT在线制作，协作工具，演示文稿，PPT模板下载</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.foundertype.com/" target="_blank" data-id="814" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="国内成立较早的专业字库公司"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/fangzheng.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>方正字库官网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">国内成立较早的专业字库公司</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://www.ziticq.com/" target="_blank" data-id="815" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="字体品牌设计师网"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ziticq.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>字体传奇网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">字体品牌设计师网</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://img.logosc.cn/" target="_blank" data-id="816" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="在线修改图片大小尺寸；免费抠图照片处理工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/logosc.cn.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>AI改图</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">AI改图神器</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-6"></i> <b><font color="red">★开发★</font></b> </h4> 
      <div class="flex-fill"></div> 
      <a class="btn-move text-xs" href="#">more+</a> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.w3school.com.cn/" target="_blank" data-id="601" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="W3school在线教程"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/w3.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>W3school</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">W3school在线教程</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://gitee.com/" target="_blank" data-id="602" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="工作台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/gitee.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>码云Gitee</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">工作台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://github.com/" target="_blank" data-id="603" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="Github"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/github.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>Github</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">Github</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://linux.lylme.com/" target="_blank" data-id="604" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="Linux命令查询"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/linux.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>Linux命令查询</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">Linux命令查询</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.csdn.net/" target="_blank" data-id="605" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="专业开发社区"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/csdn.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>CSDN</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">专业开发社区</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://cdn.bytedance.com/" target="_blank" data-id="606" class="card no-c  mb-4 site-693" data-toggle="tooltip" data-placement="bottom" title="字节跳动静态资源公共库"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zijie.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>字节跳动CDN</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">字节跳动静态资源公共库</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://cloud.tencent.com/" target="_blank" data-id="607" class="card no-c  mb-4 site-424" data-toggle="tooltip" data-placement="bottom" title="云服务器"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/tengxunyun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>腾讯云</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">云服务器</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.aliyun.com/" target="_blank" data-id="608" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="云服务器"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/aliyun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>阿里云</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">云服务器</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.pytk.net/" target="_blank" data-id="609" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="一款为Python打造，仅需拖拽就能生成Tkinter布局的小工具"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/pytk.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>Tkinter布局助手</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">Tkinter,图形界面,拖拽组件</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-42"></i> <b><font color="red">★社区资讯<span style="color:#f1404b"> &middot; </span>资讯★</font></b> </h4> 
      <div class="flex-fill"></div> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.ithome.com/" target="_blank" data-id="4201" class="card no-c  mb-4 site-1996" data-toggle="tooltip" data-placement="bottom" title="IT科技门户网站，快速精选IT新闻，实时报道科技周边"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/ITzj.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>IT之家</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">IT科技门户网站，快速精选IT新闻，实时报道科技周边</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://s.weibo.com/top/summary" target="_blank" data-id="4202" class="card no-c  mb-4 site-1994" data-toggle="tooltip" data-placement="bottom" title="随时随地发现新鲜事"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/weibo.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>微博热榜</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">随时随地发现新鲜事</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.toutiao.com/" target="_blank" data-id="4203" class="card no-c  mb-4 site-1992" data-toggle="tooltip" data-placement="bottom" title="通用信息平台，致力于连接人与信息"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/toutiao.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>今日头条</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs"> 通用信息平台，致力于连接人与信息</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.36kr.com/" target="_blank" data-id="4203" class="card no-c  mb-4 site-1990" data-toggle="tooltip" data-placement="bottom" title="创业资讯、科技新闻、投融资对接、股权投资、极速融资等创业服务"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/36kr.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>36kr</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">创业资讯、科技新闻、投融资对接、股权投资、极速融资等创业服务</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://sspai.com/" target="_blank" data-id="4204" class="card no-c  mb-4 site-1955" data-toggle="tooltip" data-placement="bottom" title="用数字产品或科学方法，提升工作效率和生活品质"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/shaoshu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>少数派</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">用数字产品或科学方法，提升工作效率和生活品质</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.zol.com.cn/" target="_blank" data-id="4205" class="card no-c  mb-4 site-1986" data-toggle="tooltip" data-placement="bottom" title="中国领先的IT信息与商务门户"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zgc.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>中关村</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">中国领先的IT信息与商务门户</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://ef.zhiweidata.com/" target="_blank" data-id="4206" class="card no-c  mb-4 site-1960" data-toggle="tooltip" data-placement="bottom" title="最全的互联网社会热点聚合平台，最深度的事件真相解读"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zhiweishijian.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>知微事见</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs"> 最全的互联网社会热点聚合平台，最深度的事件真相解读</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://trends.zhiweidata.com/historyList" target="_blank" data-id="4207" class="card no-c  mb-4 site-1955" data-toggle="tooltip" data-placement="bottom" title="平台榜单、热点聚焦、订阅预警、热点分析"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zhiweiyulun.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>知微舆论场</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">平台榜单、热点聚焦、订阅预警、热点分析</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://hao.199it.com/" target="_blank" data-id="4208" class="card no-c  mb-4 site-1960" data-toggle="tooltip" data-placement="bottom" title="更加快速找到大数据相关的工具平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/dashuju.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>大数据</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs"> 更加快速找到大数据相关的工具平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://tophub.today/" target="_blank" data-id="4209" class="card no-c  mb-4 site-1649" data-toggle="tooltip" data-placement="bottom" title="全网各站热榜聚合平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/jrrb.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>今日热榜</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">全网各站热榜聚合平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.leiphone.com/" target="_blank" data-id="4210" class="card no-c  mb-4 site-12" data-toggle="tooltip" data-placement="bottom" title="读懂智能;未来"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/leifeng.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>雷锋网</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">读懂智能;未来</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
     </div> 
     <div class="d-flex flex-fill "> 
      <h4 class="text-gray text-lg mb-4"> <i class="site-tag iconfont icon-tag icon-lg mr-1" id="term-45"></i> <b><font color="green">★社区资讯<span style="color:#f1404b"> &middot; </span>社区★</font></b> </h4> 
      <div class="flex-fill"></div> 
     </div> 
     <div class="row "> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="http://tieba.baidu.com/" target="_blank" data-id="4501" class="card no-c  mb-4 site-3322" data-toggle="tooltip" data-placement="bottom" title="以兴趣主题聚合志同道合者的互动平台"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/teiba.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>百度贴吧</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">以兴趣主题聚合志同道合者的互动平台</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a   "> 
       <div class="url-body default"> 
        <a href="https://www.zhihu.com/" target="_blank" data-id="4502" class="card no-c  mb-4 site-732" data-toggle="tooltip" data-placement="bottom" title="知乎"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/zhihu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>知乎</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">发现-知乎</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://www.douban.com/" target="_blank" data-id="4503" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="豆瓣"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/douban.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>豆瓣</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">豆瓣</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-7a  "> 
       <div class="url-body default"> 
        <a href="https://www.jianshu.com/" target="_blank" data-id="4504" class="card no-c  mb-4 site-294" data-toggle="tooltip" data-placement="bottom" title="创作你的创作"> 
         <div class="card-body"> 
          <div class="url-content d-flex align-items-center"> 
           <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"> 
            <img src="ico/jianshu.png" /> 
           </div> 
           <div class="url-info flex-fill"> 
            <div class="text-sm overflowClip_1"> 
             <strong>简书</strong> 
            </div> 
            <p class="overflowClip_1 m-0 text-muted text-xs">创作你的创作</p> 
           </div> 
          </div> 
         </div> </a> 
       </div> 
      </div> 
      
      
     </div> 
    `;

    // 将内容插入到页面中
    contentDiv.innerHTML = businessSection;
});
