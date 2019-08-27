# Deploy

## Develop

```
git clone { this repo }
cd { this repo }
yarn  # installing required packages
yarn start
```

## Production

```
cp .env.example .env.production
vi .env.production  # Production用に編集する
yarn build && aws s3 sync build/ s3://{ バケット名 }
```

# DNS

__S3のstatic website hostingだけではHTTPSに対応できないのでCloud FrontとRoute 53を併用する__
__バケット名はドメインと一致する形で作成する__

* ウェブサイトホスティングとして使用できるがHTTPSが使用できない
http://{ バケット名 }.s3-website-ap-northeast-1.amazonaws.com/index.html
* エンドポイントとして動作するのでウェブサイトホスティングとしては使用できない
https://{ バケット名 }.s3.amazonaws.com/index.html

## Cloud Front
* Distributionの作成
Originは作成したバケット名と一致させる
* Distributionに対してACMで発行した証明書を割り当てる

## Route 53
CNAMEのvalueにCloud FrontのDomain Nameを指定する