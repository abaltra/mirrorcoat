terraform {
  backend "s3" {
    bucket         = "abaltra-tfstates"
    region         = "us-east-1"
    profile        = "abaltra"
    # MAKE SURE TO UPDATE THE KEY TO THE APPLICATION NAME!
    key = "mirrorcoat/terraform.tfstate"
  }
}
