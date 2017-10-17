class WechatsController < ActionController::Base
  # For details on the DSL available within this file, see https://github.com/Eric-Guo/wechat#wechat_responder---rails-responder-controller-dsl
  wechat_responder

  # 默认文字信息responder
  on :text do |request, content|
    request.reply.text "echo: #{content}" #Just echo
  end

  # 当用户加关注
  on :event, with: 'subscribe' do |request|
    request.reply.text "欢迎 #{request[:FromUserName]} 关注职业说！
我们为精英人才提供知识付费服务！
职业的人说职业的事，不灌鸡汤只吃肉！"
  end

  # 当用户点击菜单时
  # on :click, with: 'BOOK_LUNCH' do |request, key|
  #   request.reply.text "User: #{request[:FromUserName]} click #{key}"
  # end
  on :click, with: 'ABOUTUS' do |request, key|
    request.reply.text "商务合作或报名职业说金融课程，请电话或者微信咨询：
辅导员Amber老师 13681039513
辅导员季老师 18611715161"
  end

  # 当用户点击菜单时
  # on :view, with: 'http://wechat.somewhere.com/view_url' do |request, view|
  #   request.reply.text "#{request[:FromUserName]} view #{view}"
  # end

  # 处理图片信息
  on :image do |request|
    request.reply.image(request[:MediaId]) #直接将图片返回给用户
  end

  # 处理语音信息
  on :voice do |request|
    request.reply.voice(request[:MediaId]) #直接语音音返回给用户
  end

  # 处理视频信息
  on :video do |request|
    nickname = wechat.user(request[:FromUserName])['nickname'] #调用 api 获得发送者的nickname
    request.reply.video(request[:MediaId], title: '回声', description: "#{nickname}发来的视频请求") #直接视频返回给用户
  end


  # 当用户取消关注订阅
  on :event, with: 'unsubscribe' do |request|
    request.reply.success # user can not receive this message
  end

  # 当无任何responder处理用户信息时,使用这个responder处理
  on :fallback, respond: 'fallback message'
end
