"""empty message

Revision ID: 9718f1f0687b
Revises: e011e737df77
Create Date: 2023-11-23 03:42:34.895232

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9718f1f0687b'
down_revision = 'e011e737df77'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('order', schema=None) as batch_op:
        batch_op.add_column(sa.Column('value', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('order', schema=None) as batch_op:
        batch_op.drop_column('value')

    # ### end Alembic commands ###
